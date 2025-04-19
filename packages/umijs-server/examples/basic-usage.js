/**
 * 基本使用示例
 */

// 在UmiJS项目的配置文件中
// .umirc.js 或 config/config.js
export default {
  plugins: [
    '@smarts-isoftstone/umijs-server'
  ],
  umiJsServer: {
    port: 8000,
    prefix: '/api',
    routes: [
      {
        path: '/users',
        method: 'get',
        handler: (req, res) => {
          res.json({
            users: [
              { id: 1, name: '张三' },
              { id: 2, name: '李四' }
            ]
          });
        }
      },
      {
        path: '/users/:id',
        method: 'get',
        handler: (req, res) => {
          const id = parseInt(req.params.id);
          if (id === 1) {
            res.json({ id: 1, name: '张三' });
          } else if (id === 2) {
            res.json({ id: 2, name: '李四' });
          } else {
            res.status(404).json({ error: '用户不存在' });
          }
        }
      },
      {
        path: '/users',
        method: 'post',
        handler: (req, res) => {
          const { name } = req.body;
          if (!name) {
            return res.status(400).json({ error: '名称不能为空' });
          }
          res.status(201).json({ id: 3, name });
        }
      }
    ]
  }
};

// 在前端页面中使用API
// src/pages/index.jsx
import React, { useEffect, useState } from 'react';
import { request } from 'umi';

export default function IndexPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setLoading(true);
    try {
      const data = await request('/api/users');
      setUsers(data.users);
    } catch (error) {
      console.error('获取用户列表失败:', error);
    } finally {
      setLoading(false);
    }
  }

  async function addUser() {
    if (!name) return;

    setLoading(true);
    try {
      await request('/api/users', {
        method: 'POST',
        data: { name }
      });
      setName('');
      fetchUsers();
    } catch (error) {
      console.error('添加用户失败:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>用户列表</h1>
      {loading ? (
        <p>加载中...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <div>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="输入用户名"
        />
        <button onClick={addUser}>添加用户</button>
      </div>
    </div>
  );
}
