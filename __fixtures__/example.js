export default {
  data: {
    _meta: {
      tables: [
        {
          name: 'ActionGoal',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'Action'
              }
            },
            {
              refTable: {
                name: 'Goal'
              }
            },
            {
              refTable: {
                name: 'User'
              }
            }
          ]
        },
        {
          name: 'ActionItem',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'Action'
              }
            },
            {
              refTable: {
                name: 'User'
              }
            }
          ]
        },
        {
          name: 'ActionResult',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'Action'
              }
            },
            {
              refTable: {
                name: 'User'
              }
            }
          ]
        },
        {
          name: 'Action',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'User'
              }
            }
          ]
        },
        {
          name: 'GoalExplanation',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'Goal'
              }
            }
          ]
        },
        {
          name: 'Goal',
          foreignKeyConstraints: []
        },
        {
          name: 'NewsUpdate',
          foreignKeyConstraints: []
        },
        {
          name: 'OrganizationProfile',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'User'
              }
            }
          ]
        },
        {
          name: 'UserActionItem',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'User'
              }
            },
            {
              refTable: {
                name: 'Action'
              }
            },
            {
              refTable: {
                name: 'UserAction'
              }
            },
            {
              refTable: {
                name: 'ActionItem'
              }
            }
          ]
        },
        {
          name: 'UserActionResult',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'User'
              }
            },
            {
              refTable: {
                name: 'Action'
              }
            },
            {
              refTable: {
                name: 'UserAction'
              }
            },
            {
              refTable: {
                name: 'ActionResult'
              }
            }
          ]
        },
        {
          name: 'UserAction',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'User'
              }
            },
            {
              refTable: {
                name: 'User'
              }
            },
            {
              refTable: {
                name: 'Action'
              }
            }
          ]
        },
        {
          name: 'UserCharacteristic',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'User'
              }
            }
          ]
        },
        {
          name: 'UserConnection',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'User'
              }
            },
            {
              refTable: {
                name: 'User'
              }
            }
          ]
        },
        {
          name: 'UserContact',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'User'
              }
            }
          ]
        },
        {
          name: 'UserEmail',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'User'
              }
            }
          ]
        },
        {
          name: 'UserPassAction',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'User'
              }
            },
            {
              refTable: {
                name: 'Action'
              }
            }
          ]
        },
        {
          name: 'UserProfile',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'User'
              }
            }
          ]
        },
        {
          name: 'UserSavedAction',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'User'
              }
            },
            {
              refTable: {
                name: 'Action'
              }
            }
          ]
        },
        {
          name: 'UserSetting',
          foreignKeyConstraints: [
            {
              refTable: {
                name: 'User'
              }
            }
          ]
        },
        {
          name: 'User',
          foreignKeyConstraints: []
        },
        {
          name: 'ZipCode',
          foreignKeyConstraints: []
        }
      ]
    }
  }
};
