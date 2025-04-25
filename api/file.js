export default async function handler(req, res) {
  // Устанавливаем заголовки CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Устанавливаем правильный тип контента
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  
  // Указываем файл для скачивания
  const response = await fetch('https://static-serve-ruby.vercel.app/fake_invoice.xlsx', {responseType: 'blob'});
  const blob = new Blob([response.data]);

  // Отправляем файл
  res.status(200).send(blob);
}
