const getClasses = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/dashboard/students/api/getClasses`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
};

export default getClasses;
