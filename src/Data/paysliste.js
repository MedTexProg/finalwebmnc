const products = [
    {
        _id: "001",
        country: "Benin",
        City1: "Cotonou",
        City2: "",
        flag: "../Flag/Benin.png",
        XAF: 11500,
        USD: 19.06,
    },
    {
        _id: "002",
        country: "Botswana",
        City1: "Gaborone",
        City2: "",
        flag: "../Flag/Botswana.png",
        XAF: 7900,
        USD: 13.09,
    },
    {
        _id: "003",
        country: "Burkina Faso",
        City1: "Ouagadougou",
        City2: "",
        flag: "../Flag/Burkina_Faso.png",
        XAF: 6500,
        USD: 10.76,
    },
    {
        _id: "004",
        country: "Burundi",
        City1: "Bujumbura",
        City2: "",
        flag: "../Flag/Burundi.png",
        XAF: 0,
        USD: 0,
    },
    {
        _id: "005",
        country: "RCA",
        City1: "Bangui",
        City2: "",
        flag: "../Flag/central_Africa.png",
        XAF: 12000,
        USD: 19.85,
    },
    {
        _id: "006",
        country: "Tchad",
        City1: "N'Djamena",
        City2: "",
        flag: "../Flag/Chad.png",
        XAF: 7000,
        USD: 11.58,
    },
    {
        _id: "007",
        country: "Congo",
        City1: "Brazzaville",
        City2: "Pointe noire",
        flag: "../Flag/congo_brazzaville.png",
        XAF: 9500,
        USD: 15.71,
    },
    {
        _id: "008",
        country: "RDC",
        City1: "Kinshasa",
        City2: "Lumbubashi",
        flag: "../Flag/Congo.png",
        XAF: 7500,
        USD: 12.41,
    },
    {
        _id: "009",
        country: "Cote d'Ivoire",
        City1: "Abidjan",
        City2: "",
        flag: "../Flag/cote_divoire.png",
        XAF: 7500,
        USD: 19.85,
    },
    {
        _id: "010",
        country: "Djibouti",
        City1: "Djibouti",
        City2: "",
        flag: "../Flag/Djibouti.png",
        XAF: 0,
        USD: 0,
    },
    {
        _id: "011",
        country: "Guinée Equatoriale",
        City1: "Malabo",
        City2: "",
        flag: "../Flag/Equatorial_Guinea.png",
        XAF: 10000,
        USD: 16.55,
    },
    {
        _id: "012",
        country: "Ethiopie",
        City1: "Addis Abeba",
        City2: "",
        flag: "../Flag/Ethiopia.png",
        XAF: 8000,
        USD: 13.24,
    },
    {
        _id: "013",
        country: "Gabon",
        City1: "Libreville",
        City2: "Port-Gentil",
        flag: "../Flag/Gabon.png",
        XAF: 10000,
        USD: 16.55,
    },
    {
        _id: "014",
        country: "Ghana",
        City1: "Accra",
        City2: "",
        flag: "../Flag/Ghana.png",
        XAF: 6000,
        USD: 9.93,
    },
    {
        _id: "015",
        country: "Guinée",
        City1: "Conakry",
        City2: "",
        flag: "../Flag/Guinean.png",
        XAF: 9000,
        USD: 14.88,
    },
    {
        _id: "016",
        country: "Kenya",
        City1: "Nairobi",
        City2: "",
        flag: "../Flag/kenya.png",
        XAF: 12000,
        USD: 19.85,
    },
    {
        _id: "017",
        country: "Libéria",
        City1: "Monrovia",
        City2: "",
        flag: "../Flag/Liberia.png",
        XAF: 10000,
        USD: 16,
    },
    {
        _id: "018",
        country: "Madagascar",
        City1: "Antananarivo",
        City2: "",
        flag: "../Flag/Madagascar.png",
        XAF: 9000,
        USD: 14.88,
    },
    {
        _id: "019",
        country: "Malaui",
        City1: "Lilongwe",
        City2: "",
        flag: "../Flag/Malawia.png",
        XAF: 10000,
        USD: 16.55,
    },
    {
        _id: "020",
        country: "Mali",
        City1: "Bamako",
        City2: "",
        flag: "../Flag/Mali.png",
        XAF: 9000,
        USD: 14.88,
    },
    {
        _id: "021",
        country: "Mozambique",
        City1: "Maputo",
        City2: "",
        flag: "../Flag/Mozambique.png",
        XAF: 0,
        USD: 0,
    },
    {
        _id: "022",
        country: "Niger",
        City1: "Niamey",
        City2: "",
        flag: "../Flag/Niger.png",
        XAF: 8000,
        USD: 13.24,
    },
    {
        _id: "023",
        country: "Nigeria",
        City1: "Abuja",
        City2: "Lagos",
        flag: "../Flag/Nigeria.png",
        XAF: 6500,
        USD: 10.76,
    },
    {
        _id: "024",
        country: "Rwanda",
        City1: "Kigali",
        City2: "",
        flag: "../Flag/Rwanda.png",
        XAF: 10000,
        USD: 16.55,
    },
    {
        _id: "025",
        country: "Sénégal",
        City1: "Dakar",
        City2: "",
        flag: "../Flag/Senegal.png",
        XAF: 5500,
        USD: 9.1,
    },
    {
        _id: "026",
        country: "Afrique du Sud",
        City1: "Pretoria",
        City2: "Johannesburg",
        flag: "../Flag/South_Africa.png",
        XAF: 0,
        USD: 0,
    },
    {
        _id: "027",
        country: "Tanzanie",
        City1: "Dodoma",
        City2: "",
        flag: "../Flag/Tanzania.png",
        XAF: 11000,
        USD: 18.2,
    },
    {
        _id: "028",
        country: "Togo",
        City1: "Lomé",
        City2: "",
        flag: "../Flag/Togo.png",
        XAF: 10000,
        USD: 16.55,
    },
    {
        _id: "029",
        country: "Ouganda",
        City1: "Kampala",
        City2: "",
        flag: "../Flag/Uganda.png",
        XAF: 0,
        USD: 0,
    },
    {
        _id: "030",
        country: "Zambie",
        City1: "Lusaka",
        City2: "Ndola",
        flag: "../Flag/Djibouti.png",
        XAF: 6000,
        USD: 9.93,
    },
    {
        _id: "031",
        country: "Cameroun",
        City1: "Douala",
        City2: "",
        flag: "../Flag/Cameroon.png",
        XAF: 6500,
        USD: 10.38,
    },
];

export default products;
