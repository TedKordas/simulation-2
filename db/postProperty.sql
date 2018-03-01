insert into properties (name, description, img_url, address, city, state, zip, loan_amount, monthly_mortgage, desired_rent, recomended)
values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) returning *;