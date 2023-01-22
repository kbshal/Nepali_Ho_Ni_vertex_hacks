// Team Nepali Ho Ni

use std::fs;

#[tokio::main]
async fn main() {
    let hospitals = get_doctors().await;

    println!("hospitals = {:#?}", hospitals);
}

async fn get_doctors() -> Result<String, Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    let body = client.get("http://vertexai.drcfs.org/hospitals").send()
        .await?
        .text()
        .await?;

    //fs::write("response.txt", body).expect("Failed to write response to file");
    Ok(body)

}
