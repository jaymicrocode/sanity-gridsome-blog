export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60b10c914ecc004ed3bbf858',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-sozsvsb7',
                  apiId: 'fa63c2ac-b01e-440a-8fbc-4b0b662bdfd8'
                },
                {
                  buildHookId: '60b10c914ecc004cfebbfa90',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-pj466ep2',
                  apiId: '5affc30b-ffb7-471e-acf4-dbf1ff5c3ec6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaymicrocode/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-pj466ep2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
