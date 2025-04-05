use("FirstBase");

db.employee_blank.find(
    {
        telephone_number: {
            $regex: /^(?:\+7|8)[\s\-()]?\d{3}[\s\-()]?\d{3}[\s\-()]?\d{2}[\s\-()]?\d{2}$/
        }
    }
);