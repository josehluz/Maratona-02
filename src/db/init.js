const Database = require('./config')

const initDb = {

    async init(){

        const db = await Database()

        await db.exec(`CREATE TABLE profile (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            monthly_budget INT,
            days_per_week INT,
            hours_per_day INT,
            vacation_per_year INT,
            value_hour INT
        )`)

        await db.exec(`CREATE TABLE jobs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            daily_hours INT,
            total_hours INT,
            name_contact TEXT,
            job_details TEXT,
            created_at DATETIME
        )`)

        await db.run (`INSERT INTO profile (
            name,
            avatar,
            monthly_budget,
            days_per_week,
            hours_per_day,
            vacation_per_year,
            value_hour
        ) VALUES (
            "José Luz",
            "https://github.com/josehluz.png",
            3000,
            5,
            5,
            4,
            70
        );`)

        await db.run (`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            name_contact,
            job_details,
            created_at
        ) VALUES (
            "Pizzaria Guloso",
            2,
            1,
            "Fulano de tal",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla aperiam aliquam perferendis, praesentium fugiat quaerat excepturi quae natus, totam molestiae soluta. Velit dolor nesciunt natus vitae numquam amet eius!",
            1617514376018
        );`)

        await db.run (`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            name_contact,
            job_details,
            created_at
        ) VALUES (
            "OneTwo Projects",
            3,
            47,
            "Ciclano",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla aperiam aliquam perferendis, praesentium fugiat quaerat excepturi quae natus, totam molestiae soluta. Velit dolor nesciunt natus vitae numquam amet eius!",
            1617514376018
        );`)

        await db.close()
    }
}

initDb.init()