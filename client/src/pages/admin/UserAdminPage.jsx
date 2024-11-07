import { useQuery, useQueryClient } from "@tanstack/react-query";

import api from "../../axios";
import { Skeleton, Table } from "antd";

const UserAdminPage = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await api.get(`/users`);
      return response.data.map((user) => ({
        key: user._id,
        ...user,
      }));
    },
  });
  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  return (
    <div>
      <Skeleton active loading={isLoading}>
        <Table dataSource={data} columns={columns} />;
      </Skeleton>
    </div>
  );
};

export default UserAdminPage;
