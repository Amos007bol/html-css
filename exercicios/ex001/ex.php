<!-- Videos da : Web Online Desenvolve -->
<div class="form"> <!-- L 10-->
<form method="=post" action="index.php"><br>
<h1>Sistema de Clientes</h1><br>
<h2>Cadastro</h2><br><br>
<label for="nome">Nome</label>
<input type="text"size="40"placeholder="nome completo"> <!--40-->
<label for="cpf">CPF:</label><!-- br L 16 -->
<input type="text" placeholder="231.231.321-11"><br><br>
<label for="email">Email:</label>
<input type="text"size="40"placeholder="email valido"><!--40-->
<label for="rg">RG:</label>
<input type="text"placeholder="147.147.147.11"><br><br>
<label for="sexo">Sexo:</label> <!-- L 22 -->
<label for="mas">Masculino</label>
<input type="radio" name="opcao" id="op1">
<label for="fem">Feminino</label>
<input type="radio" name="opcao" id="op1"> <!-- L 26 -->
<label for="outro">Outros</label>
<input type="radio" name="opcao" id="op1"><br><br>
<label for="data">Data de  Nascimento:</label>
<input type="date" name="data" id="data"> <!-- L 88 -->
<h2>Endereço</h2><br><br>
<label for="uf">Estado:</label>
<select name="estado" id="uf">
<option value="0">Escolha sua Região</option>
<optgroup label="norte">
<option value="1">Acre</option>
<option value="2">Amazonas</option>
<option value="3">Amapá</option>
<option value="4">Pará</option>
<option value="5">Rondônia</option>
<option value="6">Roraima</option>
<option value="7">Tocantins</option>
</optgroup>
<optgroup label="nordeste">
<option value="8">Alagoas</option>
<option value="9">Bahia</option>
<option value="10">Ceará</option>
<option value="11">Maranhão</option>
<option value="12">Piauí</option>
<option value="13">Pernambuco</option>
<option value="14">Paraíba</option>
<option value="15">Rio Grande do Norte</option>
<option value="16">Sergipe</option> <!-- L 51 -->
</optgroup>
<optgroup label="centro-oeste">
<option value="17">Goiais</option>
<option value="18">Mato Grosso </option>
<option value="19">Mato Grosso do Sul</option>
<option value="20">Distrito Federal</option>
</optgroup>
<optgroup label="sudeste"> <!-- L 59-->
<option value="21">Espirito Santo</option>
<option value="22">Minas Gerais</option>
<option value="23">Rio de Janeiro</option>
<option value="24">São Paulo</option>
</optgroup>

<optgroup label="sul">
<option value="25">Paraná</option>
<option value="26">Rio Grande do Sul</option>
<option value="27">Santa Catarina</option>
</optgroup>
</select>
<label for="cidade">Cidade:</label>
<input type="text"placeholder="cidade"><br><br>
<label for="cep">CEP:</label>
<input type="text"placeholder="21365-001">
<label for="bairro">Bairro:</label>
<input type="text"placeholder="bairro"><br><br>
<label for="rua">Rua:</label>
<input type="text"size="30"placeholder="logradouro">
<label for="nu">Número</label>
<input type="text"size="5"placeholder="numero"><br><br>
<label for="comp">Complemento:</label>
<input type="text"size="30"placeholder="andar, apartamento, bloco"><br><br>
<input type="submit" value="enviar"> <!-- L 84 -->
<input type="button" value="voltar"> <br><br>
</form>
</div>