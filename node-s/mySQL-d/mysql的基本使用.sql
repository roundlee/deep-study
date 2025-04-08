-- 通过*查询所有列信息
-- select * from users
-- select username,password from users

-- 插入数据
-- insert into users (username,password) value ('lick','123321')

-- 修改数据
-- update users set password='888888' where id=4
-- update users set password='admin123' , status=1 where id=2

-- 删除数据
-- delete from users where id=4

-- where
-- select * from users where status=1

-- and or
-- select * from users where status=0 and id<3
-- select * from users where status=1 or username='牧尘'

-- order by,多重排序
-- select * from users order by status asc
-- select * from users order by id desc
-- select * from users order by status desc,username asc

-- count(*) as启用别名
select count(*) as total from users where status=0


