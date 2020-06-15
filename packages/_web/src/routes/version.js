import { promisify } from 'util'
import { exec } from 'child_process'
const promise__exec = promisify(exec)
export async function get(req, res) {
	const { stdout, stderr } = await promise__exec('git rev-parse HEAD')
	if (stderr) {
		res.writeHead(500)
		res.end('Error getting version')
		return
	}
	res.writeHead(200)
	res.end(stdout)
}