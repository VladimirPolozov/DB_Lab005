use("FirstBase");

db.employee_blank.find(
    {
        prikaz: {
            $regex: /404/
        }
    }
);