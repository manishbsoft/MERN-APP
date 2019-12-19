import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Manish Kumar",
      image:
        "https://previews.123rf.com/images/garagestock/garagestock1606/garagestock160603855/57634024-%EC%9D%B8%ED%84%B0%EB%84%B7-%EA%B2%80%EC%83%89-%EC%97%94%EC%A7%84-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EA%B0%9C%EB%85%90%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B2%80%EC%83%89.jpg",
      place: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
