# Portfolio Website

Kishan Kumar ki personal portfolio website — frontend (HTML/CSS/JS) + backend (Node.js/Express + TiDB Cloud).

## Folder Structure

```
portfolio/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js        ← API
│   ├── db.js            ← TiDB Cloud Connection
│   ├── package.json
│   ├── .env             ← Database Password
│   └── schema.sql       ← SQL Table Create Script
│
└── README.md
```

## Setup Steps

### 1. TiDB Cloud database banayein
- [TiDB Cloud](https://tidbcloud.com) par free cluster banayein.
- Cluster ke "Connect" button se `host`, `port`, `username`, `password` copy karein.
- `backend/schema.sql` ko TiDB Cloud SQL console (ya `mysql` client) me chalayein taaki `pf` database aur `clint` table ban jaye.

### 2. Backend setup

```bash
cd backend
npm install
```

`.env` file me apni TiDB Cloud details bhar dein:

```
DB_HOST=your-tidb-cloud-host.tidbcloud.com
DB_PORT=4000
DB_USER=your_username.root
DB_PASSWORD=your_password
DB_NAME=pf
PORT=5000
```

Server start karein:

```bash
npm start
```

Server `http://localhost:5000` par chalega.

### 3. Frontend run karein

`frontend/index.html` ko browser me kholein (ya Live Server extension use karein).

Agar backend kisi doosre URL/port par deploy hai, to `frontend/script.js` me ye line update karein:

```js
const API_BASE_URL = "http://localhost:5000";
```

### 4. Contact form kaise kaam karta hai
- User form bharke submit karta hai.
- `script.js` fetch request bhejta hai `POST /api/contact` par.
- `server.js` request receive karke `db.js` ke through TiDB Cloud me data insert karta hai.
- Success/error message form ke neeche dikhaya jata hai.

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** TiDB Cloud (MySQL-compatible)

## Notes
- Purane `index.php` aur MySQL wale setup ki jagah ab Node.js backend + TiDB Cloud use ho raha hai.
- `.env` file kabhi bhi GitHub par public repo me commit na karein — `.gitignore` me add karein.
