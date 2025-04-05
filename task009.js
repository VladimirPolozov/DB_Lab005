use("FirstBase");

db.employee_blank.find(
    {
        information: {
            $regex: /Дата рождения: 10\.\d{2}\.1987/
        }
    }
);