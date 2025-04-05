use("FirstBase");

db.employee_blank.find(
    {
        information: {
            $regex: /Увлечения: [Пп][^ ]*[Ее]/
        }
    }
);