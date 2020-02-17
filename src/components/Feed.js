import React, { Component } from 'react';
import Post from './Post';

class Feed extends Component {
  state = {
    posts: [
      {
        author: 'Luiz Gustavo',
        avatar: 'https://scontent.fstu3-1.fna.fbcdn.net/v/t1.0-9/p960x960/80636915_2420497624739743_2363603082325000192_o.jpg?_nc_cat=109&_nc_ohc=onBLXMMILTkAX8m6rTe&_nc_ht=scontent.fstu3-1.fna&_nc_tp=6&oh=162e67916bd7962cb403ebcae59d6640&oe=5EC8A63C',
        date: '04 jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            author: 'Diego Fernandes',
            avatar: 'https://avatars1.githubusercontent.com/u/2254731?s=400&v=4',
            content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
          },
        ]
      },
      {
        author: 'Rennan Douglas',
        avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQGAzpXD7i1h_w/profile-displayphoto-shrink_800_800/0?e=1587600000&v=beta&t=VAgHzdkBvpTwzZeFDH3fjcfkl6B_D4p8O_kxO3tf_4w',
        date: '04 jun 2019',
        content: "Fala galera, beleza?\n\nEstou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            author: 'Micaeli Medeiros',
            avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQFelYRRQDg3YA/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=zVVg5h68SfyfjPkMrNFPnzwZobpu_HiafNSWVz6yyIs',
            content: 'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!'
          },
          {
            author: 'Julia Giorgi Martin',
            avatar: 'https://media-exp1.licdn.com/dms/image/C5603AQEpPl2giN-mPQ/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=XTqioe90M5R52eUX4Pb_5P92FSIN0Qysd7Des6dksHI',
            content: 'Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!'
          }
        ]
      }
    ]
  }

  render() {
    return (
      <ul className="feed">
        {this.state.posts && this.state.posts.map((post, key) => <Post key={key} post={post}/>)}
      </ul>
    );
  }
}

export default Feed;
