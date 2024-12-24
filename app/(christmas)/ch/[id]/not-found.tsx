export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">找不到这个圣诞卡片 🎄</h2>
        <p className="text-gray-600 mb-8">
          这个圣诞卡片可能不存在或者已经被删除了
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          返回首页
        </a>
      </div>
    </div>
  );
}
