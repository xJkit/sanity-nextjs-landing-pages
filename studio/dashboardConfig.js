export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '632fafdcc9d6db09f407c29d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s5piu1cv',
                  apiId: 'd4d6c55e-b7f5-4a3e-9a69-a16af54934c1'
                },
                {
                  buildHookId: '632fafdd815f090cd1a9faba',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8ugo13qj',
                  apiId: '455551c0-72f6-41a7-96e9-4f764dc43a3a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xJkit/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8ugo13qj.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
