"use client";

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">服务条款</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">最后更新日期：2024年11月20日</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. 服务说明</h2>
          <p>HackathonWeekly（以下简称&ldquo;我们&rdquo;）是一个公益开源的极客社区，通过组织黑客松活动，帮助创作者实现想法。使用我们的服务即表示您同意以下条款。</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. 用户责任</h2>
          <p>作为用户，您同意：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>提供真实、准确的个人信息</li>
            <li>遵守社区规范和行为准则</li>
            <li>尊重其他用户的知识产权</li>
            <li>不从事任何违法或有害活动</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. 知识产权</h2>
          <p>关于项目和创作的知识产权规定：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>在活动中创作的项目，知识产权归创作者所有</li>
            <li>鼓励开源和知识共享</li>
            <li>使用他人代码时需遵守相应的开源协议</li>
            <li>尊重并保护他人的知识产权</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. 活动规则</h2>
          <p>参与活动时，您需要：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>遵守活动时间安排</li>
            <li>尊重其他参与者</li>
            <li>遵守项目提交要求</li>
            <li>保持良好的协作态度</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. 免责声明</h2>
          <p>我们不对以下情况承担责任：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>用户在活动中的个人行为</li>
            <li>项目实现过程中的技术问题</li>
            <li>因不可抗力导致的活动变更或取消</li>
            <li>用户间的知识产权纠纷</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. 服务变更</h2>
          <p>我们保留以下权利：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>随时修改或终止服务</li>
            <li>更新服务条款</li>
            <li>调整活动规则和形式</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. 争议解决</h2>
          <p>如发生争议，我们将：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>优先通过友好协商解决</li>
            <li>提供公平公正的调解</li>
            <li>必要时寻求法律途径解决</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. 联系方式</h2>
          <p>如果您对本服务条款有任何疑问，请通过以下方式联系我们：</p>
          <p>邮箱：contact@hackathonweekly.com</p>
        </section>
      </div>
    </div>
  );
}
