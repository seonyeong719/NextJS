const GENDER_URL = process.env.NEXT_PUBLIC_GENDER_URL;

interface Name {
  name: string;
}

const getGender = async (name: Name) => {
  const res = await fetch(`${GENDER_URL}name=${name}`);
};
