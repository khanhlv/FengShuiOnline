function find() {
	var dataList = [{"id":"1","name":"Đại triển hồng đô, khả được thành công","rate":"Cát"},{"id":"2","name":"Thăng trầm không số, về già vô công","rate":"Bình thường"},{"id":"3","name":"Ngày ngày tiến tới, vạn sự thuận toàn","rate":"Đại cát"},{"id":"4","name":"Tiền đồ gai góc, dâu khổ theo đuổi","rate":"Hung"},{"id":"5","name":"Làm ăn phát đạt, lợi danh đều có ","rate":"Đại cát"},{"id":"6","name":"Trời cho số phận có thể thành công","rate":"Cát"},{"id":"7","name":"Ôn hòa êm dịu nhất phải thành công","rate":"Cát"},{"id":"8","name":"Qua giai đoạn gian nan, có ngày thành công","rate":"Cát"},{"id":"9","name":"Tự làm có sức thất bại khó lường","rate":"Hung"},{"id":"10","name":"Tâm sức làm không, không được đến bờ","rate":"Hung"},{"id":"11","name":"Vững đi từng bước, được người trọng vọng","rate":"Cát"},{"id":"12","name":"Gầy gò yếu đuối, mọi việc khó thành","rate":"Hung"},{"id":"13","name":"Trời cho cát vận, được người kính trọng","rate":"Cát"},{"id":"14","name":"Nửa được nửa bại, dựa vào nghị lực","rate":"Bình thường"},{"id":"15","name":"Đại sự thành tựu, nhất điịnh hưng vương","rate":"Cát"},{"id":"16","name":"Thành tựu to lớn, tên tuổi lừng danh","rate":"Đại cát"},{"id":"17","name":"Quý nhân trợ giúp, sẽ được thành công","rate":"Cát"},{"id":"18","name":"Thuận lợi xương thịnh, trăm việc trôi chảy","rate":"Đại cát"},{"id":"19","name":"Nội ngoại bất hòa, khó khăn muôn phát","rate":"Hung"},{"id":"20","name":"Vượt mọi gian nan, lo xa nghĩ hoài Đại","rate":"Hung"},{"id":"21","name":"Chuyên tâm kinh doanh hay dung trí","rate":"Cát"},{"id":"22","name":"Có tài không vận, việc không gặp may","rate":"Hung"},{"id":"23","name":"Tên tuổi 4 phương, sẽ thành đại nghiệp","rate":"Đại cát"},{"id":"24","name":"Phải dựa tự lập sẽ thành đại nghiệp","rate":"Cát"},{"id":"25","name":"Thiên thời địa lợi vì được nhân cách","rate":"Cát"},{"id":"26","name":"Bảo táp phong ba qua được hiểm nguy","rate":"Hung"},{"id":"27","name":"Lúc thắng lúc thua giữ được thành công","rate":"Cát"},{"id":"28","name":"Tiến mãi không lùi trí tuệ được dung","rate":"Đại cát"},{"id":"29","name":"Cát hung chia đổ, được thua mỗi nửa","rate":"Hung"},{"id":"30","name":"Danh lợi được mùa đại sự thành công","rate":"Đại cát"},{"id":"31","name":"Con rồng trong nước thành công sẽ đến","rate":"Đại cát"},{"id":"32","name":"Dùng trí lâu dài, sẽ được thịnh vượng","rate":"Cát"},{"id":"33","name":"Rủi ro không ngừng khó có thành công","rate":"Hung"},{"id":"34","name":"Số phận trung cất tiến lùi bảo thủ","rate":"Bình thường"},{"id":"35","name":"Trôi nổi bập bùng thường hay gặp nạn","rate":"Hung"},{"id":"36","name":"Tránh được điểm ác, thuận buồm xuôi gió","rate":"Cát"},{"id":"37","name":"Danh thì được tiếng lợi thì bằng không","rate":"Bình thường"},{"id":"38","name":"Đường rộng thênh thang nhìn thấy tương lai","rate":"Đại cát"},{"id":"39","name":"Lúc thịnh lúc suy chìm nổi vô định","rate":"Bình thường"},{"id":"40","name":"Thiên ý cất vận tiền đồ sang sủa","rate":"Đại cát"},{"id":"41","name":"Sự nghiệp không chuyên hầu như không thành","rate":"Hung"},{"id":"42","name":"Nhẫn nhịn chịu đựng, xấu sẽ thành tốt","rate":"Cát"},{"id":"43","name":"Cây xanh trổ lá đột nhiên thành công","rate":"Cát"},{"id":"44","name":"Ngược với ý mình tham công lỡ việc","rate":"Hung"},{"id":"45","name":"Quanh co khúy khỷu khó khăn kéo dài","rate":"Hung"},{"id":"46","name":"Quý nhân giúp đỡ thành công đại sự","rate":"Đại cát"},{"id":"47","name":"Danh lợi đều có thành công tốt đẹp","rate":"Đại cát"},{"id":"48","name":"Cặp cát được cát gặp hung thì hung","rate":"Bình thường"},{"id":"49","name":"Hung cát cùng có, một thành một bại","rate":"Bình thường"},{"id":"50","name":"Một thịnh một suy bập bùn sóng gió","rate":"Bình thường"},{"id":"51","name":"Trời quanh mây tạnh nay được thành công","rate":"Cát"},{"id":"52","name":"Sướng thịnh nửa số cát trước hung sau","rate":"Hung"},{"id":"53","name":"Nổ lực hết mình thành công ích ỏi","rate":"Bình thường"},{"id":"54","name":"Bề ngoài tươi sang ẩn họa sẽ tới","rate":"Hung"},{"id":"55","name":"Ngược lại ý mình, có có thành công","rate":"Đại hung"},{"id":"56","name":"Nổ lực phấn đấu phận tốt quay về","rate":"Cát"},{"id":"57","name":"Bấp bênh nhiều chuyến hung trước tốt sau","rate":"Bình thường"},{"id":"58","name":"Gặp việc do dự khó có thành công","rate":"Hung"},{"id":"59","name":"Mơ mơ hồ hồ khó có định phương hướng","rate":"Bình thường"},{"id":"60","name":"Mây che nửa trăng dấu hiệu phong ba","rate":"Hung"},{"id":"61","name":"Lo nghỉ nhiều điều mọi việc không thành","rate":"Hung"},{"id":"62","name":"Biết hướng nổ lực con đường phồn vinh","rate":"Cát"},{"id":"63","name":"Mười việc chín không mất công mất sức","rate":"Hung"},{"id":"64","name":"Cát vận tự đến, có được thành công","rate":"Cát"},{"id":"65","name":"Nội ngoại bất hòa thiếu thốn tín nhiệm","rate":"Bình thường"},{"id":"66","name":"Mọi việc như ý phú quý tự đến","rate":"Đại cát"},{"id":"67","name":"Nắm được thời cơ, thành công sẽ đến","rate":"Cát"},{"id":"68","name":"Lo trước nghĩ sau thường hay gặp nạn","rate":"Hung"},{"id":"69","name":"Bập bên khó tránh vất vả","rate":"Hung"},{"id":"70","name":"Cát hung đều có chỉ dự chí khí","rate":"Bình thường"},{"id":"71","name":"Được rồi lại mất khó có bình yên","rate":"Hung"},{"id":"72","name":"An lạc tự đến tự nhiên cát tường","rate":"Cát"},{"id":"73","name":"Như là vô mưu khó được thành đạt","rate":"Bình thường"},{"id":"74","name":"Trong lành có hung tiến không bằng lùi","rate":"Bình thường"},{"id":"75","name":"Nhiều điều đại hung, hiện tượng phân tán","rate":"Đại hung"},{"id":"76","name":"Khổ trước sướng sau, không bị thất bại","rate":"Cát"},{"id":"77","name":"Nửa được nửa mất sang mà không thực","rate":"Bình thường"},{"id":"78","name":"Tiền đồ tươi sang trăm đầy hy vọng","rate":"Đại cát"},{"id":"79","name":"Được rồi lại mất lo cũng bằng không","rate":"Hung"},{"id":"80","name":"Số phận cao nhất, sẽ được thành công","rate":"Đại cát"}];

	var inputVal = document.getElementById('inputVal').value;

	if (!inputVal || inputVal.length < 4) {
		alert('Vui lòng nhập 4 số điện thoại');
		
		document.getElementById('phoneNumber').innerHTML = '';
		document.getElementById('numberCalc').innerHTML = '';
		document.getElementById('resultName').innerHTML = '';
		document.getElementById('resultRate').innerHTML = '';
		return;
	}
	
	var input = parseFloat(inputVal) / 80;

	var str = input.toString();

	if (str.indexOf(".") > 0) {
		str = "0" + str.substring(str.indexOf("."));
	}

	var output = parseFloat(str) * 80;
	
	for (var i = 0, leng = dataList.length; i < leng; i++) {
		if (dataList[i].id == output) {
			document.getElementById('phoneNumber').innerHTML = inputVal;
			document.getElementById('numberCalc').innerHTML = dataList[i].id;
			document.getElementById('resultName').innerHTML = dataList[i].name;
			document.getElementById('resultRate').innerHTML = dataList[i].rate;
			
			if (dataList[i].rate == 'Cát' || dataList[i].rate == 'Đại cát') {
				document.getElementById('resultName').style.color = "red";
				document.getElementById('resultRate').style.color = "red";
			}
			
			if (dataList[i].rate == 'Bình thường') {
				document.getElementById('resultName').style.color = "blue";
				document.getElementById('resultRate').style.color = "blue";
			}
			
			if (dataList[i].rate == 'Hung') {
				document.getElementById('resultName').style.color = "black";
				document.getElementById('resultRate').style.color = "black";
			}
			
			break;
		}
	}
}

function findMoto() {
	var dataList = [{"id":"01","name":"Thiên địa thái bình"},{"id":"41","name":"Đức vọng cao thượng"},{"id":"02","name":"Không phân định"},{"id":"42","name":"Sự nghiệp bất thành"},{"id":"03","name":"Tấn tới như ý"},{"id":"43","name":"Hoa trong mưa đêm"},{"id":"04","name":"Bị bệnh"},{"id":"44","name":"Buồn tủi, khổ đau"},{"id":"05","name":"Trường thọ"},{"id":"45","name":"Vận tốt"},{"id":"06","name":"Cuộc sống an nhàn, dư dả"},{"id":"46","name":"Gặp nhiều chuyển biến"},{"id":"07","name":"Cương nghị, quyết đoán"},{"id":"47","name":"Khai hoa nở nhụy"},{"id":"08","name":"Ý chí kiên cường"},{"id":"48","name":"Lập chí"},{"id":"09","name":"Lúc lên voi khi xuống chó"},{"id":"49","name":"Nhiều điều xấu"},{"id":"10","name":"Vạn sự kết thúc"},{"id":"50","name":"Một thành một bại"},{"id":"11","name":"Gia vận tốt lành"},{"id":"51","name":"Thịnh yếu xen kẽ"},{"id":"12","name":"Ý chí mềm yếu"},{"id":"52","name":"Biết trước được việc"},{"id":"13","name":"Tài chí hơn người"},{"id":"53","name":"Nội tâm ưu sầu"},{"id":"14","name":"Nước mắt khổ đau"},{"id":"54","name":"May rủi song hành"},{"id":"15","name":"Đạt được phước thọ"},{"id":"55","name":"Ngoài tốt trong khổ"},{"id":"16","name":"Quý nhân hỗ trợ"},{"id":"56","name":"Thảm thương"},{"id":"17","name":"Vượt qua mọi khó khăn"},{"id":"57","name":"Cây thông trong vườn tuyết"},{"id":"18","name":"Có chí thì nên"},{"id":"58","name":"Khổ trước sướng sau"},{"id":"19","name":"Đoàn tụ ông bà"},{"id":"59","name":"Mất phương hướng"},{"id":"20","name":"Sự nghiệp thất bại"},{"id":"60","name":"Tối tăm không ánh sáng"},{"id":"21","name":"Thời vận lên xuống, thăng trầm"},{"id":"61","name":"Danh lợi đầy đủ"},{"id":"22","name":"Tiền vào như nước,tiền ra như giọt sương mai"},{"id":"62","name":"Căn bản yếu kém"},{"id":"23","name":"Mặt trời mọc"},{"id":"63","name":"Đạt được vinh hoa phú quý"},{"id":"24","name":"Tài lộc đầy nhà"},{"id":"64","name":"Cốt nhục chia cắt"},{"id":"25","name":"Thông minh, nhạy bén"},{"id":"65","name":"Phú quý trường thọ"},{"id":"26","name":"Biến hóa kỳ dị"},{"id":"66","name":"Trong ngoài không hòa nhã"},{"id":"27","name":"Dục vọng vô tận"},{"id":"67","name":"Đường danh lợi thông suốt"},{"id":"28","name":"Tâm lý bất an"},{"id":"68","name":"Lập nghiệp thương gia"},{"id":"29","name":"Dục vọng lớn nhưng khó thành"},{"id":"69","name":"Đứng ngồi không yên"},{"id":"30","name":"Chết đi sống lại"},{"id":"70","name":"Diệt vong thế hệ"},{"id":"31","name":"Tài dũng được chí"},{"id":"71","name":"Tinh thần khó chịu"},{"id":"32","name":"Cầu được uớc thấy"},{"id":"72","name":"Suối vàng chờ đợi"},{"id":"33","name":"Gia môn hưng thịnh"},{"id":"73","name":"Ý chí cao mà sức yếu"},{"id":"34","name":"Gia đình tan vỡ"},{"id":"74","name":"Hoàn cảnh gặp bất trắc"},{"id":"35","name":"Bình an ôn hòa"},{"id":"75","name":"Thủ được binh an"},{"id":"36","name":"Phong ba không ngừng"},{"id":"76","name":"Vĩnh biệt ngàn thu"},{"id":"37","name":"Hiển đạt uy quyền"},{"id":"77","name":"Vui sướng cực đỉnh"},{"id":"38","name":"Ý chí mềm yếu, thụ động"},{"id":"78","name":"Gia đình buồn tủi"},{"id":"39","name":"Vinh hoa phú quý"},{"id":"79","name":"Hồi sức"},{"id":"40","name":"Cẩn thận được an"},{"id":"80","name":"Gặp nhiều xui xẻo"}];
	
	var inputVal = document.getElementById('inputVal').value;

	if (!inputVal || inputVal.length < 4) {
		alert('Vui lòng nhập nhập biển số xe hoặc lớn hơn 4');
		
		document.getElementById('phoneNumber').innerHTML = '';
		document.getElementById('numberCalc').innerHTML = '';
		document.getElementById('resultName').innerHTML = '';
		return;
	}
	
	var input = parseFloat(inputVal) / 80;

	var str = input.toString();

	if (str.indexOf(".") > 0) {
		str = "0" + str.substring(str.indexOf("."));
	}

	var output = parseFloat(str) * 80;
	
	for (var i = 0, leng = dataList.length; i < leng; i++) {
		if (dataList[i].id == output) {
			document.getElementById('phoneNumber').innerHTML = inputVal;
			document.getElementById('numberCalc').innerHTML = dataList[i].id;
			document.getElementById('resultName').innerHTML = dataList[i].name;
			
			break;
		}
	}
}

function findLNTK() {
	var data = ["Đại an", "Lưu niên", "Tốc hỷ", "Xích khẩu", "Tiểu cát", "Không vong"];
	
	var hour= ["Tí (23g - 1g)", "Sửu (1g - 3g)", "Dần (3g - 5g)", 
	"Mão (5g - 7g)", "Thìn (7g - 9g)", "Tị (9g - 11g)", 
	"Ngọ (11g - 13g)", "Mùi (13g - 15g)", "Thân (15g - 17g)", 
	"Dậu (17g - 19g)", "Tuất (19g - 21g)", "Hợi (21g - 23g)"];
	
	var days = 25;
	var month = 8;
	var hourIndex = 6;
	var resultMonth = parseInt(month) - parseInt(parseInt(month) / 6) * 6;
	var resultDay = (parseInt(month) + parseInt(days) - 1) - parseInt((parseInt(month) + parseInt(days) - 1) / 6) * 6;
	var resultAll = (parseInt(month) + parseInt(days) + parseInt(hourIndex) - 2) - parseInt((parseInt(month) + parseInt(days) + parseInt(hourIndex) - 2) / 6) * 6;
	
	console.log(resultMonth);
	console.log(resultDay);
	console.log(resultAll);
	
	console.log(data[parseInt(resultMonth)-1]);
	console.log(data[parseInt(resultDay)-1]);
	console.log(data[parseInt(resultAll)-1]);

}

findLNTK();