import types from '../action-creators/types';
const initialState = [
    {
        name: 'Harvey Specter',
        location: 'New York, USA',
        thumbnail: 'https://image.ibb.co/bZYqvm/harvy.png',
        likes: 121,
        following: 723,
        followers: 4433,
        comments: [
            {
                thumbnail: 'https://image.prntscr.com/image/dT2H2tN0TpGwA_JcAlhmAw.png',
                name: 'Mike Ross',
                text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.',
                time: '3d'
            },
            {
                thumbnail: 'https://image.prntscr.com/image/dT2H2tN0TpGwA_JcAlhmAw.png',
                name: 'Rachel Zein',
                text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.',
                time: '3d'
            },
            {
                thumbnail: 'https://image.prntscr.com/image/dT2H2tN0TpGwA_JcAlhmAw.png',
                name: 'Louis Litt',
                text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.',
                time: '3d'
            }
        ]
    }
]

const avatar = 'https://image.prntscr.com/image/dT2H2tN0TpGwA_JcAlhmAw.png';

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FOLLOW : {
            let stateCopy = [...state];
            stateCopy[0].followers++;
            return stateCopy;
        }
        case types.LIKE: {
            let stateCopy = [...state];
            stateCopy[0].likes++;
            return stateCopy;
        }
        case types.POST_COMMENT: {
            let stateCopy = [...state];
            stateCopy[0].comments.push({thumbnail: avatar, name: action.author, text: action.content, time: '3d'});
            return stateCopy;
        }  
        default:
            return state;
    }
}

module.exports = dataReducer;