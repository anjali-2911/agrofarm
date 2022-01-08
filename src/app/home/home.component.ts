import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
cards=[
  {
    img:"https://vanguardrenewables.com/wp-content/uploads/2020/09/RainbowFarm-1024x726.jpg",
    title:'Mamacha Gao',
    act:'Activities',
    desc:'Organic Farming,Swimming,Fishing,\nGaming,Bonefire,\nBarbecue,\n Camping,Organic\n Veg,Market',
    status:'available'
    
  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWCGK4To5thE-nftxTVD4xlHDkCtFpyTH5g&usqp=CAU',
    title:'Sandeshs Farm',
    act:'Activities',
    desc:'Organic Farming,Swimming,Fishing,\nGaming,Bonefire,Barbecue,Camping,Organic \nVeg,Market',
    status:'unavailable'
  },
  {
    img:'https://images.unsplash.com/photo-1523525385869-1bb0ba80c97d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZyUyMGdyYXNzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    title:'Lemon Grass Field',
    act:'Activities',
    desc:'Organic Farming,Swimming,Fishing,Gaming,\nBonefire,Barbecue,Camping,Organic\n Veg,Market',
    status:'available'
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvkAYD89rrXrqUM3S1WkfPLLflWAgsZOs_bKfPrFfmqDA4wIHx-NWb6Q-lPaKY-mu5wk&usqp=CAU",
    title:'tikkey Goat Farm',
    act:'Activities',
    desc:'Organic Farming,Swimming,\nFishing,Gaming,\nBonefire,Barbecue,Camping,Organic\n Veg,Market',
    status:'available'
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQqVeS8fp34aJAUIdVVokALvCPjlY3KeFy7mj3J5QdyXp1OutJ1tkAsT71q0jRcd6R54&usqp=CAU",
    title:'Fruit Garden',
    act:'Activities',
    desc:'Organic Farming,Swimming,Fishing,Gaming,\nBonefire,Barbecue,Camping,Organic \nVeg,Market',
    status:'available'
  },
  {
    img:'https://www.indiamike.com/files/images/89/71/31/yaak.jpg',
    title:'Sheepyard',
    act:'Activities',
    desc:'Organic Farming,Swimming,Fishing,Gaming,\nBonefire,Barbecue,Camping,Organic \nVeg,Market',
    status:'available'
  },
  {
    img:"https://images.unsplash.com/photo-1571341514065-b710ff6c07d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZW4lMjBmaWVsZHxlbnwwfHwwfHw%3D&w=1000&q=80",
    title:'Green Fields',
    act:'Activities',
    desc:'Organic Farming,Swimming,Fishing,Gaming,\nBonefire,Barbecue,Camping,Organic \nVeg,Market',
    status:'available'
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-6dmzzwB5EBXtasurvCXMT61HIATvJZIzG110wQmXlXqOG2weDPg9sYpm8Vl4cWvxME&usqp=CAU",
    title:'Mind Wind',
    act:'Activities',
    desc:'Organic Farming,Swimming,Fishing,Gaming,\nBonefire,Barbecue,Camping,Organic\n Veg,Market',
    status:'available'
  }
];

booknow:boolean=true;
book()
{
  
}

// isshowdiv:boolean=true;
// toggleOn()
// {
//   this.isshowdiv=!this.isshowdiv;
// }

// iftrue:boolean=true;
// display()
// {
//   this.iftrue=!this.iftrue;
// }

// iffalse:boolean=true;
// show()
// {
//   this.iffalse=!this.iffalse;
// }




  constructor(){}
ngOnInit(): void{}
}