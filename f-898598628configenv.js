function env() {
    return {
		REACT_APP__CLIENT_ID: 'autorizar.meu.inss.gov.br',
		REACT_APP__BASE_URL: 'https://meu.inss.gov.br/',
		REACT_APP__URL_LOGIN: 'https://sso.acesso.gov.br/',
		REACT_APP__URL_API: 'https://vip-pmeuinss-api.inss.gov.br/apis/',
		REACT_APP__URL_ARQ: 'https://vip-pmeuinss-arq.inss.gov.br/apis/',
		REACT_APP__TIMEOUT_CACHE: 900000,
		REACT_APP__KBA_URL: 'https://cidadao.dataprev.gov.br/cadastroDni/pages/segurado/questionarioKBA.xhtml',
		REACT_APP__CAPTCHA_SITE_KEY_DESAFIO: '6LcUaIkeAAAAANhzdzkoRao671i3gzRFj-RRSUSW',
		REACT_APP__CAPTCHA_SITE_KEY_INVISIVEL: '6LcTahsmAAAAAN60eaYvJ_UIsW9ilCspEsemEb6_',
		REACT_APP__HTML_SCRIPT_CHAT_BOT: "\x3Cscript id='omni-chat-snippet' src='https://prd-inss-webclient.omni.extreme.digital/static/js/main.js'>\x3C/script><div id='omni-chat-snippet'></div>",
		REACT_APP__BIOMETRIA_TEMPO_ENTRE_VERIFICACOES: '5',
		REACT_APP__BIOMETRIA_TEMPO_LIMITE_VERIFICACOES: '30',
		REACT_APP__FIREBASE_API_KEY: 'AIzaSyBNnInSky3lOeDsyks9s9msGhdL3nYJAZk',
		REACT_APP__FIREBASE_PROJECT_ID: 'dtp-meu-inss',
		REACT_APP__FIREBASE_APP_ID: '1:887332197528:web:48b3be08e37ccf5932eced',
		REACT_APP__FIREBASE_MINIMUM_FETCH_INTERVAL: 3600000,
		REACT_APP__URL_REAGENDAMENTO_SABI: 'https://sabiweb.inss.gov.br/sabiweb/remarcacao/inicio.view#sabiweb',
		REACT_APP__URL_ATUALIZACAO_CADASTRAL_RFB: 'https://servicos.receita.fazenda.gov.br/servicos/cpf/alterar/default.asp',
		REACT_APP_SCRIPT_ORACLE_INFINITY: "<script type='text/JavaScript' src='https://d.oracleinfinity.io/infy/acs/account/53a421751e674da418c7b65d1a8bcf8d/js/meu_inss/odc.js'></script>",
		REACT_APP_SCRIPT_OZ_FORENSICS: "https://biometric-solutionz-sdk.dataprev.gov.br/plugin_liveness.php",
		REACT_APP_REQUERIMENTO_DESCONTO_ENTIDADES: {
			SERVICO: { id: 18636, sigla: 'ANADESENT' },
			LOCAL: 3999,
			UO_INSS: '015005',
			CAMPOS_ADICIONAIS: { 
				NB: 106731, 
				CODENT: 106732, 
				NOMENT: 106733, 
				PERDESCONT: 106734, 
				AUTDESCONT: 106735,
				PENSIONIST: 110311, 
				NBPENSAO: 110312, 
				CPFINSTITU: 110314, 
				NOMEINSTIT: 110315, 
				DTNASCINST: 110316,
				HERDEIRO: 110313
			},
		},
		REACT_APP__PROCURADOR_PERFIS: {
			CONSULTA_EXTRATOS: 23393, 
			CONSULTA_PEDIDOS: 23392,
		}
	};
}
