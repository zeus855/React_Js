import React,{Component} from "react";


    class Article extends Component {
       state = {
      articles : [
        {titre: "variete", date: "31/03/23", contenu: "evenements climatiques"},
        {titre: "sport", date: "25/05/23", contenu: "MMA"},
        {titre: "politique", date: "20/06/23", contenu: "elections"}
      ]
    
    } 
     articleHandler(){
   
              const newArticles = this.state.articles.slice()
              console.log(newArticles[0].titre,"/",newArticles[1].titre,"/",newArticles[2].titre)
          
              newArticles.map((article) => {
                return article.titre;
              })
          
              this.setState({articles : newArticles});
            }




        render(){
            return <div>
            
                    Je suis un component
            </div>
        }
    }


    // class Article extends Component {

    // state = {
    //   articles : [
    //     {titre: "variete", date: "31/03/23", contenu: "evenements climatiques"},
    //     {titre: "sport", date: "25/05/23", contenu: "MMA"},
    //     {titre: "politique", date: "20/06/23", contenu: "elections"}
    //   ]
    
    // }
//     articleHandler(){
   
//       const newArticles = this.state.articles.slice()
//       console.log(newArticles[0].date,"/",newArticles[1].date,"/",newArticles[2].date)
  
//       newArticles.map((article) => {
//         return article.date++;
//       })
  
//       this.setState({articles : newArticles});
//     }
  
//     render() {
//         return(
//             <>
              

//             </>
//         )
//     }
// }














export default Article;





