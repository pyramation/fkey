export default {
  data: {
    _meta: {
      tables: [
        {
          name: 'Tree',
          foreignKeyConstraints: []
        },
        {
          name: 'Commit',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'Tree'
              }
            },
            {
              refTable: {
                name: 'User'
              }
            },
            {
              refTable: {
                name: 'Ref'
              }
            }
          ]
        },
        {
          name: 'Ref',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'Commit'
              }
            }
          ]
        },
        {
          name: 'User',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'User'
              }
            }
          ]
        }
      ]
    }
  }
};
