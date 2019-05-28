import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  flag = false;
  
  salaryMonth;
  pfNum;
  joinedDate;
  joined_date;
  
  empName;
  designation;
  accNum;

  //Monthly income
  basic;
  da;
  hra;
  athorAllowance;
  conveyance;
  medical;
  lta;
  Bonus;
  grossPay

  netSalary;

  //Monthly deduction
  esi;
  epf;
  LIC;
  incomeTax;
  proTax;
  otherDeduction;
  pf;
  deposit;
  Leave;

  totalDeduction;


  //conversion of number to words
  a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  n;
  grossPayWords;
  // netSalary;

  submit(){
    var date = new Date(this.joinedDate),
        mnth = ("0" + (date.getMonth()+1)).slice(-2),
        day  = ("0" + date.getDate()).slice(-2);
    this.joined_date = day+"-"+mnth+"-"+date.getFullYear();   
    console.log(this.joined_date);

    this.grossPay = +this.basic + +this.da 
    + +this.hra + +this.athorAllowance + +this.conveyance + +this.medical + +this.lta + +this.Bonus;

    this.totalDeduction = +this.esi + +this.epf 
    + +this.LIC + +this.incomeTax + +this.proTax + +this.otherDeduction + +this.pf + +this.deposit + +this.Leave;

    this.netSalary = this.grossPay - this.totalDeduction;

    if ((this.netSalary = this.netSalary.toString()).length > 9)
    this.grossPayWords= 'overflow';
    this.n = ('000000000' + this.netSalary).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!this.n)
        this.grossPayWords;
    var str = '';
    str += (this.n[1] != 0) ? (this.a[Number(this.n[1])] || this.b[this.n[1][0]] + ' ' + this.a[this.n[1][1]]) + 'crore ' : '';
    str += (this.n[2] != 0) ? (this.a[Number(this.n[2])] || this.b[this.n[2][0]] + ' ' + this.a[this.n[2][1]]) + 'lakh ' : '';
    str += (this.n[3] != 0) ? (this.a[Number(this.n[3])] || this.b[this.n[3][0]] + ' ' + this.a[this.n[3][1]]) + 'thousand ' : '';
    str += (this.n[4] != 0) ? (this.a[Number(this.n[4])] || this.b[this.n[4][0]] + ' ' + this.a[this.n[4][1]]) + 'hundred ' : '';
    str += (this.n[5] != 0) ? ((str != '') ? 'and ' : '') + (this.a[Number(this.n[5])] || this.b[this.n[5][0]] + ' ' + this.a[this.n[5][1]]) + 'only ' : '';
    this.grossPayWords = str;
    console.log(this.grossPayWords);
    
    this.flag = true;
  }

  close(){
    this.flag = false;
  }

  makePDF(){
    //converting into pdf
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 10;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  

    this.flag = false;
  }

}
