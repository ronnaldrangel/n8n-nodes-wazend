import { INodeProperties } from 'n8n-workflow';

// Opções da messages-api (Mensagens)
export const messagesOperationsOptions: INodeProperties = {
	displayName: 'Operacion',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['messages-api'], // Value do Resource
		},
	},
	options: [
		// Opción = Enviar mensaje de Texto
		{
			// Send Text
			name: 'Enviar Texto',
			action: 'Enviar texto',
			description: 'Envía mensaje de texto',
			value: 'send-text',
		},
	
		// Opción = Enviar Imagen
		{
			// Send Media
			name: 'Enviar Imagen',
			action: 'Enviar imagen',
			description: 'Envía mensaje de imagen',
			value: 'send-image',
		},
	
		// Opción = Enviar Video
		{
			// Send Media
			name: 'Enviar Video',
			action: 'Enviar video',
			description: 'Envía mensaje de video',
			value: 'send-video',
		},
	
		// Opción = Enviar Audio
		{
			// Send Narrated Audio
			name: 'Enviar Audio',
			action: 'Enviar audio',
			description: 'Envía mensaje de audio',
			value: 'send-audio',
		},
	
		// Opción = Enviar Documento
		{
			// Send Media
			name: 'Enviar Documento',
			action: 'Enviar documento',
			description: 'Envía mensaje con documento',
			value: 'send-document',
		},
	
		// Opción = Enviar Encuesta
		{
			// Send Poll
			name: 'Enviar Encuesta',
			action: 'Enviar encuesta',
			description: 'Envía una encuesta de hasta 12 opciones',
			value: 'send-poll',
		},
	
		// Opción = Enviar Contacto
		{
			name: 'Enviar Contacto',
			action: 'Enviar contacto',
			description: 'Envía un contacto en WhatsApp',
			value: 'send-contact',
		},
	
		// Opción = Enviar Lista
		{
			name: 'Enviar Lista',
			action: 'Enviar lista',
			description: 'Envía una lista de opciones interactiva',
			value: 'send-list',
		},
	
		// Opción = Enviar Botones
		{
			name: 'Enviar Botones',
			action: 'Enviar botones',
			description: 'Envía mensaje con botones interactivos',
			value: 'send-buttons',
		},
	
		// Opción = Enviar PIX
		{
			name: 'Enviar PIX',
			action: 'Enviar PIX',
			description: 'Envía botón de pago PIX',
			value: 'send-pix',
		},
	
		// Opción = Enviar Status
		{
			name: 'Enviar Status',
			action: 'Enviar status',
			description: 'Publicar un status/stories',
			value: 'send-stories',
		},
	
		// Opción = Reaccionar Mensaje
		{
			name: 'Reaccionar Mensaje',
			action: 'Reaccionar mensaje',
			description: 'Añade una reacción a un mensaje',
			value: 'send-reaction',
		},
	],	
	// Definindo como padrão a opção "Enviar Texto"
	default: 'send-text',
};
