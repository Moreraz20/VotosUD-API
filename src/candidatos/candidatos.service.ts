import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CanditoDocument } from './candidato.schema';
import { CreateCandidatoDto } from './createCandidatoDto';
import { ObjectId } from 'mongodb';
import { ResponseUpdate } from './interfaceCandidato';
import { UpdateCandidatoDto } from './updateCandidatoDto';

@Injectable()
export class CandidatosService {
  constructor(
    @InjectModel('candidato')
    private readonly CandidatoModel: Model<CanditoDocument>,
  ) {}

  //Create candidato
  async createCandidato(createCandidatoDto: CreateCandidatoDto) {
    const dataCandidato = new this.CandidatoModel(createCandidatoDto);
    try {
      await dataCandidato.save();
      return {
        message: 'Candidato created',
        candidato: dataCandidato,
      };
    } catch (e) {
      console.log(e);
      return {
        message: 'Candidato create failed',
      };
    }
  }

  //List all Candidato's
  async findAll(): Promise<CanditoDocument[]> {
    return this.CandidatoModel.find();
  }

  //find Candidato by Id
  async findCandidato(id: string) {
    if (ObjectId.isValid(id)) {
      const query = await this.CandidatoModel.findOne({ _id: id });
      return query;
    } else {
      throw new BadRequestException('Candidato not found');
    }
  }
  //Delete Candidato by Id
  async deleteCandidato(id: string): Promise<ResponseUpdate> {
    if (ObjectId.isValid(id)) {
      const found = await this.findCandidato(id);
      if (found) {
        try {
          await this.CandidatoModel.deleteOne({
            _id: id,
          });
          return {
            message: 'Candidato deleted',
            id: id,
          };
        } catch (e) {
          console.log(e);
        }
      } else {
        throw new NotFoundException('Candidato not found');
      }
    } else {
      throw new BadRequestException('Candidato not found');
    }
  }

  //Update Candidato by Id
  async updateCandidato(
    id: string,
    updateCandidatoDto: UpdateCandidatoDto,
  ): Promise<ResponseUpdate> {
    if (ObjectId.isValid(id)) {
      const found = await this.findCandidato(id);
      if (found) {
        try {
          const candidato = await this.CandidatoModel.findOneAndUpdate(
            { _id: id },
            updateCandidatoDto,
          );
          return {
            message: 'candidato updated',
            id: candidato._id,
          };
        } catch (e) {
          console.log(e);
        }
      } else {
        throw new NotFoundException('candidato not found');
      }
    } else {
      throw new BadRequestException('candidato not found');
    }
  }
}
