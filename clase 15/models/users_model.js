import fs from "fs"
import path from "path"
import { fileURLToPath } from "url";

// npm i jsonwebtoken
// npm i bcrypt
// npm i dotenv

// __dirname
const __filename = fileURLToPath(import.meta.url)
const usersFilePath = path.join(path.dirname(__filename), '../data/users.json');

const readUsersFile = () => {
    const data = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(data);
}

const writeUsersFile = (data) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(data), 'utf8')
}

export {readUsersFile, writeUsersFile};

