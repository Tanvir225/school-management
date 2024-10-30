const getSections = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/dashboard/students/api/getSections`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
};

export default getSections;
