import { parse } from 'csv-parse'
import { createReadStream } from 'fs'
import { promisify } from 'util'
import { pipeline } from 'stream'
import path from 'path'

const pipelineAsync = promisify(pipeline)

export async function getCitiesByCountry(countryName: string): Promise<string[]> {
  const filename = path.resolve(process.cwd(), 'public', 'world-cities.csv')
  const cities: string[] = []

  const parser = parse({
    columns: true,
    skip_empty_lines: true,
  })

  parser.on('readable', function () {
    let record
    while (null !== (record = parser.read())) {
      if (record.country === countryName) {
        cities.push(record.name)
      }
    }
  })

  await pipelineAsync(createReadStream(filename), parser)

  return cities
}

// // Usage example
// const filename = 'path/to/your/file.csv';
// const countryName = 'United Arab Emirates';
// getCitiesByCountry(filename, countryName).then(cities => console.log(cities));
