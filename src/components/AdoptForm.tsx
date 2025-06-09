import {
  Box,
  Button,
  MenuItem,
  Typography,
  InputLabel,
  Autocomplete,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { PetField } from "./PetField";
import { PetButton } from "./PetButton";
import { Pet, User } from "utils/types";
import { useApi } from "hooks/useApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "contexts/UserContext";
import { useAdocao } from "hooks/useAdocao";

export const AdoptionForm = ({ pet }: { pet?: Pet }) => {
  const { data: pets } = useApi<Pet[]>("pets");
  const { user, setUser } = useUser();
  const { realizarAdocao, error } = useAdocao();

  const [selectedPet, setSelectedPet] = useState<Pet | null>(pet ?? null);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const [form, setForm] = useState({
    cpf: "",
    telefone: "",
    email: "",
    fotoPessoa: null as File | null,
    fotoAmbiente: null as File | null,
    tipoMoradia: "",
    historico: "",
    motivo: "",
    petId: pet ? pet.id : (null as number | null),
  });

  useEffect(() => {
    if (!pet && pets) {
      const p =
        pets.find((p) => p.id === Number(searchParams.get("pet"))) || null;
      setSelectedPet(p);
    }
  }, [pets, pet, form.petId]);

  const fotoPessoaRef = useRef<HTMLInputElement>(null);
  const fotoAmbienteRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "fotoPessoa" | "fotoAmbiente"
  ) => {
    const file = e.target.files?.[0] || null;
    setForm({ ...form, [key]: file });
  };

  const { data: fetchedUser, refetch } = useApi<User>(
    user ? `users/${user.id}` : null
  );

  useEffect(() => {
    if (fetchedUser) {
      setUser(fetchedUser);
    }
  }, [fetchedUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const request = await realizarAdocao(
      form.petId ?? Number(searchParams.get("pet")),
      user?.id
    );

    if (request) {
      await refetch();
      navigate("/");
    } else {
      alert(error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
      }}
    >
      <Typography variant="h5" fontWeight={600} textAlign="center">
        Qual pet irá adotar?
      </Typography>
      <Autocomplete
        disabled={pet !== undefined}
        options={pets || []}
        getOptionLabel={(option) => option.nome}
        value={selectedPet}
        onChange={(event, value) => {
          setSelectedPet(value);
          setForm({ ...form, petId: value?.id || null });
        }}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            <img
              src={option.fotoBase64}
              alt={option.nome}
              style={{
                width: 30,
                height: 30,
                marginRight: 8,
                borderRadius: "50%",
              }}
            />
            {option.nome}
          </li>
        )}
        renderInput={(params) => (
          <PetField
            {...params}
            label="Selecionar Pet"
            placeholder="Digite o nome do pet"
            required
            InputProps={{
              ...params.InputProps,
              startAdornment: selectedPet ? (
                <>
                  <img
                    src={selectedPet.fotoBase64}
                    alt={selectedPet.nome}
                    style={{
                      width: 30,
                      height: 30,
                      marginRight: 8,
                      borderRadius: "50%",
                    }}
                  />
                  {params.InputProps.startAdornment}
                </>
              ) : (
                params.InputProps.startAdornment
              ),
            }}
          />
        )}
        fullWidth
      />

      <Typography variant="h5" fontWeight={600} textAlign="center">
        Formulário de Adoção 🐾
      </Typography>

      <PetField
        label="CPF"
        name="cpf"
        value={form.cpf}
        onChange={handleChange}
        required
      />

      <PetField
        label="Telefone"
        name="telefone"
        value={form.telefone}
        onChange={handleChange}
        required
      />

      <PetField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <Box sx={{ width: "100%" }}>
          <InputLabel>Foto do adotante</InputLabel>
          <input
            type="file"
            ref={fotoPessoaRef}
            accept="image/*"
            onChange={(e) => handleFileChange(e, "fotoPessoa")}
            style={{ display: "none" }}
            id="fotoPessoa"
            name="fotoPessoa"
          />
          <label htmlFor="fotoPessoa">
            <PetButton
              onClick={() => fotoPessoaRef.current?.click()}
              title={form.fotoPessoa ? "Foto selecionada" : "Selecionar foto"}
              color={form.fotoPessoa ? "secondary" : "primary"}
              sx={{ width: "100%" }}
              fullWidth
            />
          </label>
        </Box>
        <Box sx={{ width: "100%" }}>
          <InputLabel>Foto do ambiente onde o pet vai morar</InputLabel>
          <input
            type="file"
            ref={fotoAmbienteRef}
            accept="image/*"
            onChange={(e) => handleFileChange(e, "fotoAmbiente")}
            style={{ display: "none" }}
            id="fotoAmbiente"
            name="fotoAmbiente"
          />
          <label htmlFor="fotoAmbiente">
            <PetButton
              onClick={() => fotoAmbienteRef.current?.click()}
              title={form.fotoAmbiente ? "Foto selecionada" : "Selecionar foto"}
              color={form.fotoAmbiente ? "secondary" : "primary"}
              sx={{ width: "100%" }}
              fullWidth
            />
          </label>
        </Box>
      </Box>

      <PetField
        select
        label="Tipo de moradia"
        name="tipoMoradia"
        value={form.tipoMoradia}
        onChange={handleChange}
        required
      >
        <MenuItem value="Apartamento">Apartamento</MenuItem>
        <MenuItem value="Casa">Casa</MenuItem>
      </PetField>

      <PetField
        label="Já teve outros pets?"
        name="historico"
        value={form.historico}
        onChange={handleChange}
        multiline
        rows={4}
        required
      />
      <PetField
        label="Por que decidiu adotar?"
        name="motivo"
        value={form.motivo}
        onChange={handleChange}
        multiline
        rows={4}
        required
      />

      <Box sx={{ display: "flex", justifyContent: "end", width: "100%" }}>
        <PetButton title="Enviar formulário" type="submit" />
      </Box>
    </Box>
  );
};
