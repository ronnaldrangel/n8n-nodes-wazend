import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';

export const profileFields: INodeProperties[] = [
    {
        displayName: 'Nombre De La Instancia',
        name: 'instanceName',
        type: 'string' as NodePropertyTypes,
        default: '',
        required: true,
        description: 'Ingrese el nombre de la instancia',
        displayOptions: {
            show: {
                resource: ['profile-api'],
            },
        },
    },
    {
        displayName: 'Nombre',
        name: 'name',
        type: 'string' as NodePropertyTypes,
        default: '',
        required: true,
        description: 'Nuevo nombre del perfil',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-profile-name'],
            },
        },
    },
    {
        displayName: 'Contacto',
        name: 'remoteJid',
        type: 'string' as NodePropertyTypes,
        default: '',
        required: true,
        description: 'Número del contacto',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: [
                    'fetch-profile',
                    'fetch-business-profile',
                    'fetch-professional-profile'
                ],
            },
        },
    },
    {
        displayName: 'Estado',
        name: 'status',
        type: 'string' as NodePropertyTypes,
        default: '',
        required: true,
        description: 'Nuevo estado del perfil (máximo 139 caracteres)',
        typeOptions: {
            maxLength: 139,
        },
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-profile-status'],
            },
        },
    },
    {
        displayName: 'URL De La Imagen',
        name: 'picture',
        type: 'string' as NodePropertyTypes,
        default: '',
        required: true,
        description: 'URL de la imagen que se establecerá como foto del perfil',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-profile-picture'],
            },
        },
    },
    {
        displayName: 'Confirmación De Lectura',
        name: 'readreceipts',
        type: 'options' as NodePropertyTypes,
        options: [
            {
                name: 'Todos',
                value: 'all',
            },
            {
                name: 'Nadie',
                value: 'none',
            },
        ],
        default: 'all',
        required: true,
        description: 'Quién puede ver cuándo has leído los mensajes',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-privacy-settings'],
            },
        },
    },
    {
        displayName: 'Foto De Perfil',
        name: 'profile',
        type: 'options' as NodePropertyTypes,
        options: [
            {
                name: 'Todos',
                value: 'all',
            },
            {
                name: 'Mis Contactos',
                value: 'contacts',
            },
            {
                name: 'Excepto Contactos Específicos',
                value: 'contact_blacklist',
            },
            {
                name: 'Nadie',
                value: 'none',
            },
        ],
        default: 'all',
        required: true,
        description: 'Quién puede ver tu foto de perfil',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-privacy-settings'],
            },
        },
    },
    {
        displayName: 'Estado',
        name: 'status',
        type: 'options' as NodePropertyTypes,
        options: [
            {
                name: 'Todos',
                value: 'all',
            },
            {
                name: 'Mis Contactos',
                value: 'contacts',
            },
            {
                name: 'Excepto Contactos Específicos',
                value: 'contact_blacklist',
            },
            {
                name: 'Nadie',
                value: 'none',
            },
        ],
        default: 'contacts',
        required: true,
        description: 'Quién puede ver tu estado',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-privacy-settings'],
            },
        },
    },
    {
        displayName: 'En Línea',
        name: 'online',
        type: 'options' as NodePropertyTypes,
        options: [
            {
                name: 'Todos',
                value: 'all',
            },
            {
                name: 'Igual Al Visto Por Última',
                value: 'match_last_seen',
            },
        ],
        default: 'all',
        required: true,
        description: 'Quién puede ver cuándo estás en línea',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-privacy-settings'],
            },
        },
    },
    {
        displayName: 'Visto Por Última',
        name: 'last',
        type: 'options' as NodePropertyTypes,
        options: [
            {
                name: 'Todos',
                value: 'all',
            },
            {
                name: 'Mis Contactos',
                value: 'contacts',
            },
            {
                name: 'Excepto Contactos Específicos',
                value: 'contact_blacklist',
            },
            {
                name: 'Nadie',
                value: 'none',
            },
        ],
        default: 'contacts',
        required: true,
        description: 'Quién puede ver tu último acceso',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-privacy-settings'],
            },
        },
    },
    {
        displayName: 'Grupos',
        name: 'groupadd',
        type: 'options' as NodePropertyTypes,
        options: [
            {
                name: 'Todos',
                value: 'all',
            },
            {
                name: 'Mis Contactos',
                value: 'contacts',
            },
            {
                name: 'Excepto Contactos Específicos',
                value: 'contact_blacklist',
            },
        ],
        default: 'all',
        required: true,
        description: 'Quién puede agregarte en grupos',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-privacy-settings'],
            },
        },
    },
];

