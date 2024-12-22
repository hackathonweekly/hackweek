'use client';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">隐私政策</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">最后更新日期：2024年11月20日</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. 信息收集</h2>
          <p>我们仅收集必要的信息来提供服务，包括：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>基本账户信息（用户名、邮箱地址）</li>
            <li>活动参与记录</li>
            <li>您主动提供的项目相关信息</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. 信息使用</h2>
          <p>我们使用收集的信息用于：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>提供、维护和改进我们的服务</li>
            <li>发送活动通知和更新</li>
            <li>回应您的问询和请求</li>
            <li>防止欺诈和滥用</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. 信息共享</h2>
          <p>我们不会出售或出租您的个人信息。仅在以下情况下可能会共享信息：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>经您明确同意</li>
            <li>为遵守法律要求</li>
            <li>保护我们的合法权益</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. 信息安全</h2>
          <p>我们采取适当的技术和组织措施来保护您的个人信息，防止未经授权的访问、使用或泄露。</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookie 使用</h2>
          <p>我们使用 Cookie 和类似技术来改善用户体验，包括：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>记住您的登录状态</li>
            <li>分析网站使用情况</li>
            <li>优化网站性能</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. 您的权利</h2>
          <p>您有权：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>访问您的个人信息</li>
            <li>更正不准确的信息</li>
            <li>要求删除您的信息</li>
            <li>反对或限制信息处理</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. 政策更新</h2>
          <p>我们可能会不时更新本隐私政策。更新后的政策将在网站上公布，并注明更新日期。</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. 联系我们</h2>
          <p>如果您对本隐私政策有任何疑问，请通过以下方式联系我们：</p>
          <p>邮箱：contact@hackathonweekly.com</p>
        </section>
      </div>
    </div>
  );
}
