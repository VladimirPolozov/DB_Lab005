use("FirstBase");

db.employee_blank.find(
    {
        information: {
            $regex: /Дата рождения: \d{2}\.\d{2}.19\d{2}/
        }
    }
);