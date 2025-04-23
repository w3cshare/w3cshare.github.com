import React, { useState } from 'react'
import {
  message,
  Alert,
  Button,
  Space,
  Typography,
  Spin,
  Divider,
  Input,
  Select,
  AutoComplete,
} from 'antd'
import {
  PageContainer,
  ProForm,
  ProFormSelect,
  ProFormText,
  ProFormDependency,
  ProFormRadio,
  ProFormCheckbox,
  ProCard,
} from '@ant-design/pro-components'

import { FormValues, CommandDetails } from './types'
import {
  PREFIX,
  packages,
  dependencyTypes,
  scriptOptions,
  commandTypes,
  packagesWithDirectories,
} from './mock'
import { getCommandDescription, getCommandType, buildCommand } from './utils'

const CommandPage: React.FC = () => {
  const [executing, setExecuting] = useState(false)
  const [output, setOutput] = useState('')
  const [previewCommand, setPreviewCommand] = useState('')
  const [commandDetails, setCommandDetails] = useState<CommandDetails | null>(null)
  const [newPackageValue, setNewPackageValue] = useState<string>('')

  const serviceApi = window.serviceApi

  const handleSubmit = async (values: FormValues) => {
    const command = buildCommand(values)
    if (!command) {
      message.error('请填写完整的命令信息')
      return
    }

    try {
      setExecuting(true)
      setOutput(`正在执行命令: ${command}\n`)

      const result = await serviceApi.executeCommand(command)
      if (result.success) {
        setOutput(prev => prev + `命令执行成功！\n${result.output || ''}`)
        message.success('命令执行成功')
      } else {
        setOutput(prev => prev + `执行失败: ${result.error || ''}\n`)
        message.error(`命令执行失败: ${result.error}`)
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '未知错误'
      setOutput(prev => prev + `执行出错: ${errorMessage}\n`)
      message.error('命令执行出错')
    } finally {
      setExecuting(false)
    }
  }

  const targetDirectories = packages.directories.map(dir => ({
    label: dir.name.replace('/*', ''),
    value: dir.name,
  }))

  const handleNewPackageSearch = (searchText: string) => {
    if (!searchText.startsWith(PREFIX)) {
      searchText = PREFIX + searchText
    }
    setNewPackageValue(searchText)
  }

  const handleValuesChange = (changedValues: any, allValues: FormValues) => {
    const command = buildCommand(allValues)
    setPreviewCommand(command)
    if (command) {
      setCommandDetails({
        type: getCommandType(allValues.commandType),
        description: getCommandDescription(allValues),
        command,
      })
    }
  }

  return (
    <PageContainer
      header={{
        title: 'Monorepo 命令执行工具',
        subTitle: '执行 Lerna 和 PNPM 命令',
      }}
    >
      <ProCard split="vertical">
        <ProCard colSpan="60%">
          <ProForm<FormValues>
            onFinish={handleSubmit}
            onValuesChange={handleValuesChange}
            submitter={false}
            initialValues={{
              commandType: 'pnpm-add',
              dependencies: '@types/node',
              dependencyType: 'dependencies',
            }}
          >
            <ProFormRadio.Group
              name="commandType"
              label="命令类型"
              options={commandTypes}
              rules={[{ required: true, message: '请选择命令类型' }]}
            />

            <ProFormDependency name={['commandType']}>
              {({ commandType }) => {
                if (commandType === 'lerna-init') {
                  return (
                    <>
                      <ProFormText
                        name="packagesPath"
                        label="子包目录"
                        placeholder="输入子包目录，例如：packages/*"
                      />
                      <ProFormCheckbox name="isIndependent" label="独立模式">
                        使用独立版本模式
                      </ProFormCheckbox>
                    </>
                  )
                }
                if (commandType === 'lerna-create') {
                  return (
                    <>
                      <ProForm.Item
                        name="newPackage"
                        label="新包名称"
                        rules={[
                          {
                            required: true,
                            message: '请输入新包名称',
                            validator: (_: any, value: string) => {
                              if (!value) {
                                return Promise.reject('请输入新包名称')
                              }
                              if (!value.startsWith(PREFIX)) {
                                return Promise.reject(`包名必须以 ${PREFIX} 开头`)
                              }
                              return Promise.resolve()
                            },
                          },
                        ]}
                      >
                        <AutoComplete
                          value={newPackageValue}
                          onChange={value => setNewPackageValue(value)}
                          onSearch={handleNewPackageSearch}
                          placeholder="输入新包名称"
                          defaultValue={PREFIX}
                          style={{ width: '100%' }}
                        />
                      </ProForm.Item>
                      <ProFormRadio.Group
                        name="packagesLib"
                        label="目标目录"
                        options={targetDirectories}
                        rules={[{ required: true, message: '请选择目标目录' }]}
                      />
                    </>
                  )
                }
                if (commandType === 'pnpm-add' || commandType === 'pnpm-remove') {
                  return (
                    <>
                      <ProFormText
                        name="dependencies"
                        label={commandType === 'pnpm-add' ? '要安装的依赖包' : '要移除的依赖包'}
                        placeholder="输入依赖包名称，多个依赖用空格分隔"
                        rules={[{ required: true, message: '请输入依赖包' }]}
                      />
                      {commandType === 'pnpm-add' && (
                        <ProFormRadio.Group
                          name="dependencyType"
                          label="依赖类型"
                          options={dependencyTypes}
                          rules={[{ required: true, message: '请选择依赖类型' }]}
                        />
                      )}
                      <ProFormRadio.Group
                        name="targetDirectory"
                        label="目标目录"
                        options={targetDirectories}
                        rules={[{ required: true, message: '请选择目标目录' }]}
                      />
                      <ProFormDependency name={['targetDirectory']}>
                        {({ targetDirectory }) => {
                          const selectedDirectory = packages.directories.find(
                            dir => dir.name === targetDirectory,
                          )
                          const packageOptions =
                            selectedDirectory?.children.map(pkg => ({
                              label: pkg,
                              value: pkg,
                            })) || []

                          return (
                            <ProFormSelect
                              name="targetPackages"
                              label="目标包"
                              mode="multiple"
                              options={packageOptions}
                              fieldProps={{
                                optionFilterProp: 'label',
                                showSearch: true,
                              }}
                              rules={[
                                {
                                  required: true,
                                  message: '请选择目标包',
                                  type: 'array',
                                  min: 1,
                                },
                              ]}
                            />
                          )
                        }}
                      </ProFormDependency>
                    </>
                  )
                }
                if (commandType === 'pnpm-run' || commandType === 'lerna-run') {
                  return (
                    <>
                      <ProFormRadio.Group
                        name="scriptName"
                        label="脚本名称"
                        options={scriptOptions}
                        rules={[{ required: true, message: '请选择脚本名称' }]}
                      />
                      <ProFormRadio.Group
                        name="targetDirectory"
                        label="目标目录"
                        options={targetDirectories}
                        rules={[{ required: true, message: '请选择目标目录' }]}
                      />
                      <ProFormDependency name={['targetDirectory']}>
                        {({ targetDirectory }) => {
                          const selectedDirectory = packages.directories.find(
                            dir => dir.name === targetDirectory,
                          )
                          const packageOptions =
                            selectedDirectory?.children.map(pkg => ({
                              label: pkg,
                              value: pkg,
                            })) || []

                          return (
                            <ProFormSelect
                              name="targetPackages"
                              label="目标包"
                              mode="multiple"
                              options={packageOptions}
                              fieldProps={{
                                optionFilterProp: 'label',
                                showSearch: true,
                              }}
                              rules={[
                                {
                                  required: true,
                                  message: '请选择目标包',
                                  type: 'array',
                                  min: 1,
                                },
                              ]}
                            />
                          )
                        }}
                      </ProFormDependency>
                    </>
                  )
                }
                return null
              }}
            </ProFormDependency>

            <Space style={{ marginTop: 24 }}>
              <Button
                type="primary"
                onClick={() => {
                  const form = document.querySelector('form')
                  form?.requestSubmit()
                }}
                loading={executing}
              >
                执行命令
              </Button>
              <Button onClick={() => setOutput('')} disabled={!output || executing}>
                清空输出
              </Button>
            </Space>
          </ProForm>
        </ProCard>

        <ProCard title="命令预览" colSpan="40%">
          {commandDetails && (
            <>
              <div>
                <Typography.Text type="secondary">命令类型：</Typography.Text>
                <Typography.Text strong>{commandDetails.type}</Typography.Text>
              </div>
              <div>
                <Typography.Text type="secondary">执行说明：</Typography.Text>
                <Typography.Text>{commandDetails.description}</Typography.Text>
              </div>
              <Divider style={{ margin: '12px 0' }} />
              <div>
                <Typography.Text type="secondary">执行命令：</Typography.Text>
                <pre
                  style={{
                    background: '#f5f5f5',
                    padding: '8px',
                    borderRadius: '4px',
                    marginTop: '8px',
                    wordBreak: 'break-all',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {commandDetails.command}
                </pre>
              </div>
            </>
          )}
          {output && (
            <>
              <Divider style={{ margin: '12px 0' }} />
              <div>
                <Typography.Text type="secondary">执行输出：</Typography.Text>
                <pre
                  style={{
                    background: '#f5f5f5',
                    padding: '8px',
                    borderRadius: '4px',
                    marginTop: '8px',
                    maxHeight: '300px',
                    overflow: 'auto',
                    wordBreak: 'break-all',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {output}
                </pre>
              </div>
            </>
          )}
        </ProCard>
      </ProCard>
    </PageContainer>
  )
}

export default CommandPage
