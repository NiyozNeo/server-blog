create table users(
    user_id serial primary key,
    user_username varchar(32) not null,
    user_password text not null,
    is_admin boolean default false,
    user_created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

create table posts(
    post_id serial primary key,
    post_title text not null,
    post_text text not null,
    post_img text,
    post_status boolean default true
);

create table comments(
    comment_id serial primary key,
    comment_author int references users(user_id) not null,
    comment_text text not null,
);