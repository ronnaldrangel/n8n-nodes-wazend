import { INodeProperties } from 'n8n-workflow';

// Opções da instances-api (Instancias)
export const instancesOperationsOptions: INodeProperties = {
	displayName: 'Operação',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['instances-api'], // Value do Resource
		},
	},

	// Opções que serão vinculadas a Operação "Instancia"
	options: [
		// Opción = Crear instancia
		{
			// Create Instance Basic
			name: 'Crear Instancia',
			action: 'Crear instancia',
			description: 'Crea una nueva Instancia',
			value: 'instance-basic',
		},

		// Opción = Conectar Instancia
		{
			// Instance Connect
			name: 'Conectar Instancia',
			action: 'Conectar instancia',
			description: 'Genera la conexión de una Instancia (QR o Base64)',
			value: 'instance-connect',
		},

		// Opción = Buscar Instancia
		{
			// Fetch Instances
			name: 'Buscar Instancia',
			action: 'Buscar instancia',
			description: 'Busca y lista las Instancias creadas',
			value: 'fetch-instances',
		},

		// Opción = Definir Comportamiento de la instancia
		{
			name: 'Definir Comportamiento',
			action: 'Definir comportamiento',
			description: 'Define el comportamiento de la instancia',
			value: 'instance-settings',
		},

		// Opción = Definir presencia
		{
			// Set Presence
			name: 'Definir Presencia',
			action: 'Definir presencia',
			description: 'Define la presencia en la instancia',
			value: 'set-presence',
		},

		// Opción = Definir/Buscar Proxy
		{
			// Set/find Proxy
			name: 'Definir/Buscar Proxy',
			action: 'Proxy',
			description: 'Define un Proxy en la instancia',
			value: 'set-proxy',
		},

		// Opción = Reiniciar instancia
		{
			// Restart Instance
			name: 'Reiniciar Instancia',
			action: 'Reiniciar instancia',
			description: 'Reinicia el socket de la Instancia',
			value: 'restart-instance',
		},

		// Opción = Desconectar instancia
		{
			// Logout Instance
			name: 'Desconectar Instancia',
			action: 'Desconectar instancia',
			description: 'Desconecta el WhatsApp de la Instancia',
			value: 'logout-instance',
		},

		// Opción = Eliminar instancia
		{
			// Delete Instance
			name: 'Eliminar Instancia',
			action: 'Eliminar instancia',
			description: 'Elimina una Instancia',
			value: 'delete-instance',
		},
	],
	// Definindo como padrão a opção "Criar Instancia"
	default: 'instance-basic',
};
