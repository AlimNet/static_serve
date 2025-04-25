// api/proxy.js
export default async function handler(req, res) {
  const fileUrl = 'https://static-serve-ruby.vercel.app/fake_invoice.xlsx'; // Путь к файлу
  
  const response = await fetch(fileUrl);
  const buffer = await response.buffer();
  
  // Добавляем CORS заголовки
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Отправляем файл
  res.status(200).send(buffer);
}
