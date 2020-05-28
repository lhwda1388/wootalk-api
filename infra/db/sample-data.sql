INSERT INTO user (ID, EMAIL, PWD, NAME) VALUES ((SELECT CONCAT('U', LPAD( NEXTVAL(user_id_seq) , 19, '0' ))), 'lhwda1388@gmail.com', 'qwer123!', 'lhw');
