$(document).ready(function() {
    var i = 1;
    $("#myBtn").click(function(){
        $("#dangky").modal();
    });

    function kiemTraTen() {
        var i=1;
        let mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("Không được để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#Name").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);

    function KiemTraDiaChi() {
        var i=1;
        let mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#DC").val() == "") {
            $("#tbDC").html("Không được để trống");
            return false;
        } 
        if (!mauKT.test($("#DC").val())) {
            $("#tbDC").html("Mỗi ký tự đầu viết hoa");
            return true;
        }
        $("#DC").html("*");
        return true;
    }
    $("#DC").blur(KiemTraDiaChi);

    function kiemTraSDT() {
        var i=1;
        let mauKT = /^0\d{3}-\d{3}-d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("Không được để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx trong đó x là số");
            return true;
        }
        $("#SDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);

    function KiemTraEmail() {
        var mauKT = /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
        if ($("#email").val() == "") {
            $("#tbemail").html("Không được để trống");
            return false;
        } 
        if (!mauKT.test($("#email").val())) {
            $("#tbemail").html("Email có dạng xxxxx@gmail.com ");
            return true;
        }
        $("#email").html("*");
        return true;
    }
    $("#email").blur(KiemTraEmail);

    function KiemTraTenTaiKhoan() {
        var mauKT = /^[a-z0-9_\.]{6,32}$/;
        if ($("#TK").val() == "") {
            $("#tbTK").html("Không được để trống");
            return false;
        } 
        $("#TK").html("*");
        return true;
    }
    $("#TK").blur(KiemTraTenTaiKhoan);

    function kiemTraMatKhau() {
        var i=1;
        let mauKT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if ($("#psw").val() == "") {
            $("#tbpsw").html("Không được để trống");
            return false;
        }
        if (!mauKT.test($("#psw").val())) {
            $("#tbpsw").html("Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số");
            return true
        }
        $("#psw").html("*");
        return true;
    }
    $("#psw").blur(kiemTraMatKhau);

    function kiemTraLaiMatKhau() {
        var i=1;
        let mauKT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if ($("#psw-repeat").val() == "") {
            $("#tbpsw-repeat").html("Không được để trống");
            return false;
        }
        if (!mauKT.test($("#psw-repeat").val())) {
            $("#tbpsw-repeat").html("Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số");
            return true
        }
        $("#psw-repeat").html("*");
        return true;
    }
    $("#psw-repeat").blur(kiemTraLaiMatKhau);

    $("#DK").click(function(){
        if (kiemTraTen()== true && KiemTraDiaChi()== true && kiemTraSDT()== true && KiemTraEmail()== true && KiemTraTenTaiKhoan()== true && kiemTraMatKhau()== true && kiemTraLaiMatKhau()== true){
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#DC").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#email").val() + "</th>";
            row += "<th>" + $("#TK").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })  
})