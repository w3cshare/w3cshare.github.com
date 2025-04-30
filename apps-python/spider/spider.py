import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import time

class AntDesignSpider:
    def __init__(self, base_url, output_dir):
        self.base_url = base_url
        self.output_dir = output_dir
        self.session = requests.Session()
        self.visited_urls = set()

    def get_page(self, url, retries=3):
        for i in range(retries):
            try:
                response = self.session.get(url)
                response.raise_for_status()
                return response.text
            except requests.RequestException as e:
                if i == retries - 1:
                    print(f"Error fetching {url}: {e}")
                    return None
                time.sleep(1)
        return None

    def save_content(self, path, content):
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

    def crawl_page(self, url):
        if url in self.visited_urls:
            return

        self.visited_urls.add(url)
        content = self.get_page(url)
        if not content:
            return

        # Parse the page content
        soup = BeautifulSoup(content, 'html.parser')

        # Save the page content
        relative_path = url.replace(self.base_url, '').lstrip('/')
        if not relative_path:
            relative_path = 'index.html'
        elif not relative_path.endswith('.html'):
            relative_path = os.path.join(relative_path, 'index.html')

        output_path = os.path.join(self.output_dir, relative_path)
        self.save_content(output_path, content)
        print(f"Saved: {output_path}")

        # Find and crawl all links in /docs/
        for link in soup.find_all('a'):
            href = link.get('href')
            if href and '/docs/' in href:
                next_url = urljoin(url, href)
                if next_url.startswith(self.base_url):
                    self.crawl_page(next_url)

def main():
    base_url = 'https://pro.ant.design/zh-CN/docs'
    output_dir = 'output'

    spider = AntDesignSpider(base_url, output_dir)
    spider.crawl_page(base_url)

if __name__ == '__main__':
    main()
