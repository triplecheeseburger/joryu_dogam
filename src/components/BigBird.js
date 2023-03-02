import '../styles/BigBird.css';
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useState} from "react";
import {TextBox} from "./TextBox";

let currentPath = "";

function BigBird() {
	const [bird, setBird] = useState(null);
	const location = useLocation();
	const birds = [1014, 1015, 1016, 1017, 1018, 1023, 1024, 1025, 1028, 1029, 1031, 1034, 1037, 1039, 1043, 1044, 1045, 1046, 1047, 1049, 1051, 1053, 1055, 1056, 1060, 1061, 1066, 1067, 1070, 1071, 1072, 1074, 1075, 1076, 1077, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1090, 1091, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1103, 1104, 1106, 1109, 1113, 1115, 1116, 1118, 1119, 1121, 1122, 1123, 1124, 1126, 1128, 1129, 1130, 1131, 1132, 1133, 1135, 1136, 1137, 1138, 1142, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1160, 1161, 1162, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1176, 1177, 1178, 1180, 1181, 1182, 1183, 1184, 1185, 1188, 1189, 1191, 1195, 1197, 1199, 1201, 1204, 1205, 1206, 1207, 1209, 1210, 1211, 1213, 1216, 1218, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1231, 1233, 1235, 1236, 1239, 1241, 1243, 1246, 1248, 1250, 1251, 1253, 1254, 1255, 1256, 1257, 1259, 1260, 1261, 1264, 1265, 1266, 1267, 1270, 1271, 1273, 1275, 1279, 1280, 1282, 1285, 1287, 1291, 1292, 1295, 1299, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1313, 1316, 1317, 1318, 1319, 1320, 1324, 1326, 1327, 1328, 1329, 1330, 1333, 1334, 1336, 1337, 1338, 1340, 1341, 1344, 1347, 1354, 1355, 1357, 1358, 1360, 1361, 1362, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1374, 1376, 1377, 1383, 1384, 1386, 1387, 1388, 1390, 1391, 1393, 1394, 1395, 1397, 1909, 1910, 1911, 1912, 1913, 1914]
	const randomBird = birds[Math.floor(Math.random() * birds.length)]
	const birdNumber = location.state?.birdNumber ?? randomBird;
	const url = process.env.REACT_APP_DATA_SINGLE_URL + '?serviceKey=' + process.env.REACT_APP_DATA_KEY + '&q1=A00000' + birdNumber;

	useEffect(() => {
		if (currentPath === location.pathname) window.location.reload();
		currentPath = location.pathname;
	}, [location]);

	useEffect(() => {
		async function fetchBird() {
			try {
				const response = await fetch(url);
				const birdText = await response.text();
				const parser = new DOMParser();
				const xmlDoc = parser.parseFromString(birdText, "text/xml");
				const imgUrl = xmlDoc.getElementsByTagName('imgUrl')[0].innerHTML;
				const anmlGnrlNm = xmlDoc.getElementsByTagName('anmlGnrlNm')[0].innerHTML;
				const anmlScnm = xmlDoc.getElementsByTagName('anmlScnm')[0].innerHTML;
				const gnrlSpftrCont = xmlDoc.getElementsByTagName('gnrlSpftrCont')[0].innerHTML;
				const eclgDpftrCont = xmlDoc.getElementsByTagName('eclgDpftrCont')[0].innerHTML;
				const bird = {imgUrl, anmlGnrlNm, anmlScnm, gnrlSpftrCont, eclgDpftrCont}
				setBird(bird);
			} catch (e) {
				console.log(e); // todo: error handling
			}
		}
		fetchBird();
	}, [])

	return (
		bird &&
		<div className='bigBird'>
			<div className='imageBox'>
				<img src={bird?.imgUrl} alt={bird?.anmlGnrlNm}/>
			</div>
			<div className='texts'>
				<TextBox>
					<div className='name'>{bird?.anmlGnrlNm}</div>
					<hr></hr>
					<div className='scienceName'>{bird?.anmlScnm.replace('&amp;', '&')}</div>
				</TextBox>
				<TextBox>
					<div className='generalDescription'>&nbsp;&nbsp;{bird?.gnrlSpftrCont}</div>
					<br></br>
					<div className='ecoDescription'>&nbsp;&nbsp;{bird?.eclgDpftrCont}</div>
				</TextBox>
			</div>
		</div>
	)
}

export default BigBird;