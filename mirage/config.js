export default function() {
    this.namespace = '/api';

    let doctors = [
        {
            type: 'doctor',
            id: 'collie',
            attributes: {
                pic: '/assets/images/collie.jpg',
                name: 'Collie',
                specialty: 'Family Medicine',
                area: 'Oakland',
                score: '92',
                bio: 'An excellent doctor. Very respected within his city.'
            }
        },
        {
            type: 'doctor',
            id: 'eagle',
            attributes: {
                pic: '/assets/images/eagle.jpg',
                name: 'Eagle',
                specialty: 'Surgery',
                area: 'San Francisco',
                score: '100',
                bio: 'The ultimate surgeon. Eagle stands at the very top and will only get higher.'
            }
        },
        {
            type: 'doctor',
            id: 'fox',
            attributes: {
                pic: '/assets/images/fox.jpg',
                name: 'Fox',
                specialty: 'Family Medicine',
                area: 'San Francisco',
                score: '83',
                bio: 'An great doctor. Always available to help people in need.'
            }
        },
        {
            type: 'doctor',
            id: 'leopard',
            attributes: {
                pic: '/assets/images/leopard.jpg',
                name: 'Leopard',
                specialty: 'Internal Medicine',
                area: 'San Francisco',
                score: '70',
                bio: 'A good doctor. Has bizarre clinic hours, so he is underrated among the community.'
            }
        },
        {
            type: 'doctor',
            id: 'lioness',
            attributes: {
                pic: '/assets/images/lioness.jpg',
                name: 'Lioness',
                specialty: 'Internal Medicine',
                area: 'Oakland',
                score: '89',
                bio: 'A great doctor. Her skills are great.'
            }
        },
        {
            type: 'doctor',
            id: 'lynx',
            attributes: {
                pic: '/assets/images/lynx.jpg',
                name: 'Lynx',
                specialty: 'Internal Medicine',
                area: 'Oakland',
                score: '74',
                bio: 'A good doctor. Always gets the job done.'
            }
        },
        {
            type: 'doctor',
            id: 'owl',
            attributes: {
                pic: '/assets/images/owl.jpg',
                name: 'Owl',
                specialty: 'Surgery',
                area: 'Oakland',
                score: '88',
                bio: 'A great surgeon and a rising star. Owl leaves most very happy.'
            }
        },
        {
            type: 'doctor',
            id: 'shepherd',
            attributes: {
                pic: '/assets/images/shepherd.jpg',
                name: 'Shepherd',
                specialty: 'Family Medicine',
                area: 'San Francisco',
                score: '96',
                bio: 'An excellent doctor. Shepherd is very popular and thus very busy.'
            }
        },
        {
            type: 'doctor',
            id: 'tiger',
            attributes: {
                pic: '/assets/images/tiger.jpg',
                name: 'Tiger',
                specialty: 'Internal Medicine',
                area: 'San Francisco',
                score: '99',
                bio: 'An excellent doctor. His expansive knowledge makes him the expert of experts.'
            }
        },
        {
            type: 'doctor',
            id: 'wolf',
            attributes: {
                pic: '/assets/images/wolf.jpg',
                name: 'Wolf',
                specialty: 'Family Medicine',
                area: 'Oakland',
                score: '77',
                bio: 'A good doctor. He is very reliable.'
            }
        }
        ];

    
    this.get('/doctors', function() {
      return { data: doctors };
    });
    
    
    this.get('/doctors/:id', function (db, request) {
        return { data: doctors.find((doctor) => request.params.id === doctor.id)};
    });





}
