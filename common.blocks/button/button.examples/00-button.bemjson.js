({
    block: 'b-page',
    title: 'button',
    head: [
        { elem: 'css', url: '_00-button.css', ie: false },
        { elem: 'css', url: '_00-button', ie: true }
    ],
    content: [
        {
            block: 'row-layout',
            content: [
                {
                    elem: 'col',
                    elemMods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        theme: 'grey',
                                        size: 'xxl',
                                        side: 'right',
                                        'only-icon': 'yes'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                size: 'xl',
                                                type: 'thin-arrow-left'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    elemMods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        theme: 'grey',
                                        size: 'xxl',
                                        side: 'left',
                                        'only-icon': 'yes'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                size: 'xl',
                                                type: 'thin-arrow-right'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        visibility: 'hidden'
                    },
                    content: '.'
                }
            ]
        },
        {
            block: 'row-layout',
            mix: [
                {
                    block: 'header'
                }
            ],
            content: [
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        disabled: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'info',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        disabled: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'refresh',
                                                size: 'xxl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '40'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'info',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'refresh',
                                                size: 'xxl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '40'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        hovered: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'info',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        hovered: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'refresh',
                                                size: 'xxl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '40'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        pressed: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'info',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        pressed: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'refresh',
                                                size: 'xxl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '40'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        pressed: 'yes',
                                        disabled: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'info',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        pressed: 'yes',
                                        disabled: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'refresh',
                                                size: 'xxl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        visibility: 'hidden'
                    },
                    content: '.'
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                }
            ]
        },
        {
            block: 'row-layout',
            mix: [
                {
                    block: 'footer'
                }
            ],
            content: [
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        disabled: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'dashboard',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        disabled: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'timeline',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        disabled: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'description',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        disabled: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'arrow-up',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '40'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'dashboard',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'timeline',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'description',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'arrow-up',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '40'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        hovered: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'dashboard',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        hovered: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'timeline',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        hovered: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'description',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        hovered: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'arrow-up',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '40'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        pressed: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'dashboard',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        pressed: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'timeline',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        pressed: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'description',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        pressed: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'arrow-up',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '40'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        pressed: 'yes',
                                        disabled: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'dashboard',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        pressed: 'yes',
                                        disabled: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'timeline',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        pressed: 'yes',
                                        disabled: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'description',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                },
                {
                    elem: 'col',
                    mods: {
                        width: 'min'
                    },
                    content: [
                        {
                            elem: 'col-inner',
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        pressed: 'yes',
                                        disabled: 'yes',
                                        'only-icon': 'yes',
                                        theme: 'transparent',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'icon',
                                            elemMods: {
                                                type: 'arrow-up',
                                                size: 'xl'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: {
                        visibility: 'hidden'
                    },
                    content: '.'
                },
                {
                    elem: 'col',
                    elemMods: {
                        gap: '20'
                    }
                }
            ]
        },
        'Button content: ',
        {
            block: 'radio-button',
            mods: {
                theme: 'transparent',
                size: 's',
                type: 'button-content'
            },
            name: 'button__content',
            value: 'icon_text',
            content: [
                {
                    elem: 'radio',
                    controlAttrs: { value: 'text' },
                    content: 'text'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'icon_text' },
                    content: 'icon + text'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'icon_text_counter' },
                    content: 'icon + text + counter'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'icon' },
                    content: 'icon'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'icon_counter' },
                    content: 'icon + counter'
                },
//                {
//                    elem: 'radio',
//                    controlAttrs: { value: 'counter' },
//                    content: 'counter'
//                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'text_counter' },
                    content: 'text + counter'
                }
            ]
        },
        '<br><br>',
        'Button__icon type: ',
        {
            block: 'radio-button',
            mods: {
                theme: 'transparent',
                size: 's',
                type: 'button-icon-type'
            },
            name: 'button__icon_type',
            value: 'info',
            content: [
                {
                    elem: 'radio',
                    controlAttrs: { value: 'info' },
                    content: 'info'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'refresh' },
                    content: 'refresh'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'dashboard' },
                    content: 'dashboard'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'timeline' },
                    content: 'timeline'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'description' },
                    content: 'description'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'arrow-up' },
                    content: 'arrow-up'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'apps-info' },
                    content: 'apps-info'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'like' },
                    content: 'like'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'dislike' },
                    content: 'dislike'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'monkey' },
                    content: 'monkey'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'thin-arrow-left' },
                    content: 'thin-arrow-left'
                },
                {
                    elem: 'radio',
                    controlAttrs: { value: 'thin-arrow-right' },
                    content: 'thin-arrow-right'
                }
            ]
        },
        '<br><br>',
        {
            block: 'example-table',
            js: true,
            themes: ['transparent', 'light-grey', 'grey', 'green', 'blue'],
            sizes: ['s', 'm', 'l', 'xl', 'xxl'],
            states: ['default', 'hovered', 'pressed', 'disabled', ['disabled', 'pressed']]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_00-button.js' }
    ]
})