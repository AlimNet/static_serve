export default async function handler(req, res) {
  // Устанавливаем заголовки CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Устанавливаем правильный тип контента
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  
  // Указываем файл для скачивания
  const file = await fetch('https://static-serve-ruby.vercel.app/fake_invoice.xlsx');
  const buffer = await file.buffer();

  // Отправляем файл
  res.status(200).send(buffer);
}
