<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>নাফিসা ওয়ার্নিং</title>
  <style>
    body {
      background: #111;
      color: #fff;
      font-family: 'Courier New', monospace;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    input {
      padding: 10px;
      font-size: 1.2rem;
      border-radius: 5px;
      border: none;
      width: 250px;
      margin-bottom: 20px;
    }
    .warning {
      background: #222;
      padding: 20px;
      border-radius: 10px;
      border: 2px solid #ff4444;
      box-shadow: 0 0 15px #ff4444;
      max-width: 400px;
      text-align: center;
      font-weight: bold;
      font-size: 1.3rem;
      color: #ff4444;
      display: none;
    }
  </style>
</head>
<body>
  <input
    id="nameInput"
    type="text"
    placeholder="নাম লিখুন (নাফিসা বা Nafisa)"
    autocomplete="off"
  />
  <div id="warning" class="warning">
    😠 খবরদার কেউ এই নামে ডাক দিবেন না!<br />
    🥰 এটা আমার বস এডমিন এর বউ এর নাম..! ⛏️
  </div>

  <script>
    const input = document.getElementById('nameInput');
    const warning = document.getElementById('warning');

    input.addEventListener('input', () => {
      const val = input.value.toLowerCase().trim();
      if (val === 'নাফিসা' || val === 'nafisa') {
        warning.style.display = 'block';
      } else {
        warning.style.display = 'none';
      }
    });
  </script>
</body>
</html>
