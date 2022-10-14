<script>
    import MemberCard from "./team/MemberCard.svelte"; 

    const membersLis = [
        {
            firstName: 'Piotr',
            surName: 'Harhaj',
            text: 'Dyrektor Alternatywy 5 🎩',
            photo: '/about/piotr.png',
            contacts: [
               {   
                    altName: 'Facebook',
                    logoImg: '/social/facebook_personal.png',
                    link: 'https://www.facebook.com/piotrharhajsasza',
                    logoSvg: ''
                },
            //    {   
            //         altName: 'Instagram',
            //         logoImg: '/social/instagram_personal.png',
            //         link: '',
            //         logoSvg: ''
            //     },
            //    {   
            //         altName: 'Twitter',
            //         logoImg: '/social/twiiter_personal.png',
            //         link: '',
            //         logoSvg: ''
            //     },                
            //    {   
            //         altName: 'Linkedin',
            //         logoImg: '/social/linkedin_personal.png',
            //         link: '',
            //         logoSvg: ''
            //     }
            ]
        },
{
            firstName: 'Katarzyna',
            surName: 'Kozlowska',
            text: 'Gospodarka w stolarni 🪓',
            photo: '/about/kasia.png',
            contacts: [
                // {   
                //     altName: 'Telegram',
                //     logoImg: '/social/telegram_personal.png',
                //     link: '',
                //     logoSvg: ''
                // },
               {   
                    altName: 'Facebook',
                    logoImg: '/social/facebook_personal.png',
                    link: '',
                    logoSvg: ''
                },
            //    {   
            //         altName: 'Instagram',
            //         logoImg: '/social/instagram_personal.png',
            //         link: '',
            //         logoSvg: ''
            //     },
            //    {   
            //         altName: 'Twitter',
            //         logoImg: '/social/twiiter_personal.png',
            //         link: '',
            //         logoSvg: ''
            //     },                
            //    {   
            //         altName: 'Linkedin',
            //         logoImg: '/social/linkedin_personal.png',
            //         link: '',
            //         logoSvg: ''
            //     }
            ]
        },
        {
            firstName: 'Monika',
            surName: 'Rucinska',
            text: 'Koordynatorka 💛',
            photo: '/about/monia.png',
            contacts: [
                // {   
                //     altName: 'Telegram',
                //     logoImg: '/social/telegram_personal.png',
                //     link: '',
                //     logoSvg: ''
                // },
               {   
                    altName: 'Facebook',
                    logoImg: '/social/facebook_personal.png',
                    link: '',
                    logoSvg: ''
                },
            //    {   
            //         altName: 'Instagram',
            //         logoImg: '/social/instagram_personal.png',
            //         link: '',
            //         logoSvg: ''
            //     },
            //    {   
            //         altName: 'Twitter',
            //         logoImg: '/social/twiiter_personal.png',
            //         link: '',
            //         logoSvg: ''
            //     },                
            //    {   
            //         altName: 'Linkedin',
            //         logoImg: '/social/linkedin_personal.png',
            //         link: '',
            //         logoSvg: ''
            //     }
            ]
        },
        {
            firstName: 'Oleg',
            surName: 'Medvedev',
            text: 'Założyciel 44Hackerspace 💻',
            photo: '/about/oleg.png',
            contacts: [
                {   
                    altName: 'Telegram',
                    logoImg: '/social/telegram_personal.png',
                    link: 'https://t.me/polish_cat',
                    logoSvg: ''
                },
               {   
                    altName: 'Facebook',
                    logoImg: '/social/facebook_personal.png',
                    link: 'https://www.facebook.com/hulio.mondre',
                    logoSvg: ''
                },
               {   
                    altName: 'Instagram',
                    logoImg: '/social/instagram_personal.png',
                    link: 'https://www.instagram.com/jesus.hobo/',
                    logoSvg: ''
                },
         
               {   
                    altName: 'Linkedin',
                    logoImg: '/social/linkedin_personal.png',
                    link: 'https://www.linkedin.com/in/oleg-darkdev',
                    logoSvg: ''
                },
                {   
                    altName: 'Discord',
                    logoImg: '/social/discord_personal.png',
                    link: 'https://discord.com/users/oleg_DarkDev#8277',
                    logoSvg: ''
                },
           ]
        },        

    ]
</script>

<div class="flex-align-center m-4 w-8/12  ">
    {#each membersLis as memberData}
        <MemberCard {memberData}/>
    {/each}
</div>