// leadershipData.ts
export interface Executive {
  name: string;
  role: string;
  image: string;
  email: string;
}

export const executives: Executive[] = [
  {
    name: "Eyosyas Tsegaye",
    role: "General Secretary",
    image: "/leaders/eyosi.jpg",
    email: "eyosyas.tsegaye@evasue.net"
  },
  {
    name: "Rekik Hailu",
    role: " Student Ministry Director r",
    image: "/leaders/kiko.jpeg",
    email: "rekik.hailu@evasue.net"
  },
  {
    name: "Tsion Tadele ",
    role: "Staff Care and Development Leader",
    image: "/leaders/tsion.jpeg",
    email: "tsion.habtu@evasue.net"
  },
  {
    name: "Mahalet Endale",
    role: "Finance and Administration Director",
    image: "/leaders/mahlet.jpg",
    email: "mahlet.kebede@evasue.net"
  },
   {
    name: "Ruth Eva Osmundsen ",
    role: "Advisor to the General Secretary",
    image: "/leaders/ruth.jpg",
    email: "rutheva@evasue.net"
  },
   {
    name: "Mesay Imiru Hailu ",
    role: "Director for Scripture Engagement Initiative ",
    image: "/leaders/mesay.jpg",
    email: "messay.imiru@evasue.net"
  },
   {
    name: "Yeabsira Adinew ",
    role: "Director for Social Transformation Initiative ",
    image: "/leaders/yabi.jpg",
    email: "yeabsira.adinew@evasue.net"
  },
];


export interface Trustee {
  name: string;
  title?: string;
}

export const trustees: Trustee[] = [
  {
    name: "Tewabech Mengiste",
    title: "Chair"
  },
  {
    name: "Nebeyou Yonas",
    title: "Vice Chair"
  },
  {
    name: "Eyosyas Tsegaye",
    title: "General Secretary"
  },
  {
    name: "Dr. Lemma Degefa",
    title: "Member"
  },
  {
    name: "Prof. Zinabu Gebremariam",
    title: "Member"
  },
  {
    name: "Solomon Kebede",
    title: "Member"
  },
  {
    name: "Dr. Yeneneh Mulugeta",
    title: "Member"
  },
  {
    name: "Dr. Zenanech Mamo",
    title: "Member"
  }
];
