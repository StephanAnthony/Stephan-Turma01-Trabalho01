# Testes da Classe GerenciadorDeTarefas

Este repositório contém uma suíte de testes para a classe `GerenciadorDeTarefas`. Estes testes garantem que as funcionalidades da classe estão funcionando conforme o esperado.

## Descrição dos Testes

Os testes são escritos em JavaScript utilizando o framework Jest. Abaixo está uma descrição de cada teste implementado:

1. **Adicionar uma Tarefa com Descrição Válida**
   - Verifica se uma tarefa com uma descrição válida é adicionada corretamente à lista de tarefas.

2. **Não Adicionar uma Tarefa com Descrição Inválida**
   - Garante que uma tarefa com uma descrição inválida (por exemplo, apenas números) não é adicionada e um erro apropriado é lançado.

3. **Remover uma Tarefa Existente**
   - Testa se uma tarefa existente pode ser removida da lista corretamente.

4. **Buscar uma Tarefa por ID**
   - Confirma que é possível recuperar uma tarefa pelo seu ID.

5. **Contar o Número de Tarefas**
   - Verifica se o número total de tarefas é contado corretamente.

6. **Marcar uma Tarefa como Concluída**
   - Testa a funcionalidade de marcar uma tarefa como concluída e verifica se o status de conclusão é atualizado corretamente.

7. **Listar Tarefas Concluídas**
   - Garante que apenas as tarefas concluídas são listadas quando solicitadas.

8. **Listar Tarefas Pendentes**
   - Verifica se apenas as tarefas pendentes são listadas.

9. **Adicionar e Remover Tags de uma Tarefa**
   - Testa se tags podem ser adicionadas e removidas de uma tarefa corretamente.

10. **Listar Tarefas por Tag**
    - Verifica se as tarefas podem ser filtradas corretamente com base nas tags associadas.

11. **Ordenar Tarefas por Data**
    - Garante que as tarefas são ordenadas corretamente com base na data.

12. **Ordenar Tarefas por Prioridade**
    - Testa se as tarefas são ordenadas de acordo com a prioridade, com as tarefas de maior prioridade aparecendo primeiro.

## Estrutura do Projeto

- **`src/GerenciadorDeTarefas.js`**: Implementação da classe `GerenciadorDeTarefas`.
- **`test/GerenciadorDeTarefas.test.js`**: Contém os testes automatizados para a classe `GerenciadorDeTarefas`.

## Requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados.

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
npm install
npm run test